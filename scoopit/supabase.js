import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_URL = "https://gssmixsiqyqseszvygqx.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/* async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

async function logout() {
  const { error } = await supabase.auth.signOut();
} */

export { supabase };
