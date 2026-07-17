import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AdminContext = createContext(null);

export function AdminProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fake credentials for development
  const ADMIN_CREDENTIALS = {
    email: 'admin@unidev.com',
    password: 'admin123',
    role: 'admin'
  };

  const USER_CREDENTIALS = {
    email: 'user@unidev.com',
    password: 'user123',
    role: 'user'
  };

  useEffect(() => {
    // Check current session on mount
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          await checkIfAdmin(session.user.email);
        } else {
          setUser(null);
          setIsAdmin(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const checkSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        setUser(session.user);
        await checkIfAdmin(session.user.email);
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkIfAdmin = async (email) => {
    // Check if user is admin using fake credentials
    if (email === ADMIN_CREDENTIALS.email) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const loginAsAdmin = async (email, password) => {
    try {
      // Check against fake admin credentials first
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('adminEmail', email);
        localStorage.setItem('userRole', 'admin');
        
        setIsAdmin(true);
        setUser({ email, role: 'admin' });
        
        return { 
          success: true, 
          isAdmin: true,
          user: { email, role: 'admin' }
        };
      }

      // Check against fake user credentials
      if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
        localStorage.setItem('isAdmin', 'false');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', 'user');
        
        setIsAdmin(false);
        setUser({ email, role: 'user' });
        
        return { 
          success: true, 
          isAdmin: false,
          user: { email, role: 'user' }
        };
      }

      // Regular user login via Supabase
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) throw error;

      const userData = data.user;
      await checkIfAdmin(userData.email);
      setUser(userData);

      return { 
        success: true, 
        isAdmin: false,
        user: userData 
      };
    } catch (error) {
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const logout = async () => {
    try {
      // Clear all session data
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('adminEmail');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userRole');
      
      // Sign out from Supabase
      await supabase.auth.signOut();
      
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const storedUserRole = localStorage.getItem('userRole');

    // Check for admin session
    if (storedIsAdmin === 'true') {
      const storedAdminEmail = localStorage.getItem('adminEmail');
      if (storedAdminEmail === ADMIN_CREDENTIALS.email) {
        setIsAdmin(true);
        setUser({ email: storedAdminEmail, role: 'admin' });
        setLoading(false);
      }
    }
    // Check for regular user session
    else if (storedIsAdmin === 'false' && storedUserRole === 'user') {
      const storedUserEmail = localStorage.getItem('userEmail');
      if (storedUserEmail === USER_CREDENTIALS.email) {
        setIsAdmin(false);
        setUser({ email: storedUserEmail, role: 'user' });
        setLoading(false);
      }
    }
  }, []);

  const value = {
    user,
    isAdmin,
    loading,
    loginAsAdmin,
    logout,
    ADMIN_CREDENTIALS,
    USER_CREDENTIALS
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