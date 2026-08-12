import { createClient } from '@supabase/supabase-js';

// ---------------------------------------------------------------------------
// Public Supabase client — uses the ANON key, safe for browser/client bundles
// NEXT_PUBLIC_ prefix is required so Next.js exposes the value to the browser.
// ---------------------------------------------------------------------------
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// ── DEBUG (temporary) ────────────────────────────────────────────────────────
// Remove once the login issue is confirmed fixed.
if (typeof window !== 'undefined') {
  console.log(
    '[supabaseClient DEBUG] NEXT_PUBLIC_SUPABASE_URL =',
    JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_URL)
  );
  console.log(
    '[supabaseClient DEBUG] NEXT_PUBLIC_SUPABASE_ANON_KEY set?',
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );
}
// ─────────────────────────────────────────────────────────────────────────────

if (!supabaseUrl || !supabaseAnonKey) {
  // Warn at module load time (visible in browser console and server logs)
  console.warn(
    '[supabaseClient] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. ' +
    'Add both variables to .env.local and restart the dev server.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: typeof window !== 'undefined',
      autoRefreshToken: typeof window !== 'undefined',
    },
  }
);

// ---------------------------------------------------------------------------
// Server-only Supabase client — uses the SERVICE ROLE key.
// Never import this in client components or pages; it bypasses RLS.
// Only safe inside API Route Handlers (app/api/**) or server actions.
// ---------------------------------------------------------------------------
export function createServerClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) {
    throw new Error(
      '[supabaseClient] SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in server environment.'
    );
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
