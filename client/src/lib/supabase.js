import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    if (import.meta.env.PROD) {
      console.error('[Supabase] Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. Auth features disabled.');
    } else {
      console.warn('[Supabase] Missing env vars — using dev placeholders. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local');
    }
    // Return a stub client that won't crash the app
    supabase = {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        getUser: async () => ({ data: { user: null }, error: null }),
        signInWithPassword: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        signOut: async () => ({ error: null }),
        refreshSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: null }),
          }),
        }),
      }),
    };
    return supabase;
  }

  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
      global: {
        fetch: (...args) => fetchWithRetry(...args),
      },
    });
  } catch (error) {
    console.error('[Supabase] Failed to create client:', error.message);
    // Fallback stub
    supabase = {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        getUser: async () => ({ data: { user: null }, error: null }),
        signInWithPassword: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        signOut: async () => ({ error: null }),
        refreshSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: null }),
          }),
        }),
      }),
    };
  }

  return supabase;
}

createSupabaseClient();

/**
 * Wrapper around fetch with single retry on network failure.
 */
async function fetchWithRetry(url, options = {}, retries = 1) {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`[Supabase] Request failed, retrying... (${retries} left)`);
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

export { supabase };
