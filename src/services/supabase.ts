import type { Database } from "@/types/database.types";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_SERVICE;

if (!supabaseUrl || !supabaseApiKey) {
	throw new Error("Missing API keys for Supabase");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseApiKey);
