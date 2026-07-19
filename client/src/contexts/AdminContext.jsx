import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const AdminContext = createContext(null);

// Session key for localStorage
const SESSION_KEY = 'luxamy_session';

export function AdminProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if email belongs to admin (via Supabase user metadata or custom table)
  const checkIfAdmin = useCallback(async (email) => {
    if (!email) return false;
    try {
      // Check user metadata on Supabase
      const { data: { user }, error } = await supabase.auth.getUser();
      if (!error && user?.app_metadata?.role === 'admin') {
        return true;
      }
      // Fallback: check a custom admin_emails table if it exists
      const { data } = await supabase
        .from('admin_users')
        .select('email')
        .eq('email', email.toLowerCase())
        .single();
      return !!data;
    } catch {
      return false;
    }
  }, []);

  // Recover session from localStorage on mount
  useEffect(() => {
    const recoverSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user) {
          setUser(session.user);
          const admin = await checkIfAdmin(session.user.email);
          setIsAdmin(admin);
          // Persist session indicator
          const sessionData = {
            email: session.user.email,
            role: admin ? 'admin' : 'user',
            expiresAt: session.expires_at,
          };
          localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
        } else {
          // Try recovering from stored session
          const stored = localStorage.getItem(SESSION_KEY);
          if (stored) {
            try {
              const parsed = JSON.parse(stored);
              // Only restore if not expired (with 5min buffer)
              if (parsed.expiresAt && parsed.expiresAt * 1000 > Date.now() + 300000) {
                // Attempt to refresh
                const { data } = await supabase.auth.refreshSession();
                if (data?.session?.user) {
                  setUser(data.session.user);
                  const admin = await checkIfAdmin(data.session.user.email);
                  setIsAdmin(admin);
                } else {
                  localStorage.removeItem(SESSION_KEY);
                }
              } else {
                localStorage.removeItem(SESSION_KEY);
              }
            } catch {
              localStorage.removeItem(SESSION_KEY);
            }
          }
        }
      } catch (error) {
        console.error('[Auth] Session recovery error:', error.message);
      } finally {
        setLoading(false);
      }
    };

    recoverSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
          const admin = await checkIfAdmin(session.user.email);
          setIsAdmin(admin);
          localStorage.setItem(SESSION_KEY, JSON.stringify({
            email: session.user.email,
            role: admin ? 'admin' : 'user',
            expiresAt: session.expires_at,
          }));
        } else {
          setUser(null);
          setIsAdmin(false);
          localStorage.removeItem(SESSION_KEY);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [checkIfAdmin]);

  const loginAsAdmin = async (email, password) => {
    try {
      // Rate-limit protection: throttle login attempts
      const attempts = JSON.parse(localStorage.getItem('luxamy_login_attempts') || '{}');
      const now = Date.now();
      if (attempts[email] && attempts[email].count >= 5 && now - attempts[email].lastAttempt < 300000) {
        return {
          success: false,
          error: 'Too many login attempts. Please wait 5 minutes and try again.',
        };
      }

      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        // Track failed attempts
        if (!attempts[email]) attempts[email] = { count: 0, lastAttempt: 0 };
        attempts[email].count++;
        attempts[email].lastAttempt = now;
        localStorage.setItem('luxamy_login_attempts', JSON.stringify(attempts));
        throw error;
      }

      // Clear failed attempts on success
      delete attempts[email];
      localStorage.setItem('luxamy_login_attempts', JSON.stringify(attempts));

      const userData = data.user;
      const admin = await checkIfAdmin(userData.email);
      setIsAdmin(admin);
      setUser(userData);

      return {
        success: true,
        isAdmin: admin,
        user: userData,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem('luxamy_login_attempts');
      await supabase.auth.signOut();
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('[Auth] Logout error:', error);
      // Force clear local state even if Supabase fails
      setUser(null);
      setIsAdmin(false);
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    loginAsAdmin,
    logout,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}