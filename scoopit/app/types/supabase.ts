import { createClient } from "@supabase/supabase-js";
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@latest"></script>;

const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_URL = "https://gssmixsiqyqseszvygqx.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/* async function loginWithGoogle() {
  const { data, error } = aait supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

async function logout() {
  const { error } = await supabase.auth.signOut();
} */

export { supabase };
