import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseApiKey) {
	throw new Error("Missing API keys for Supabase");
}

export const supabase = createClient(supabaseUrl, supabaseApiKey);
