import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseApiKey) {
	throw new Error("Missing API keys for Supabase");
}
// supabase instance which is using SERVICE_KEY what means this key has the ability to bypass Row Level Security (we don't have to be authenticated)
// Only use this in backend
export const supabase = createClient(supabaseUrl, supabaseApiKey);
