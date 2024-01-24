"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { schema } from "@/lib/schemas";

export const action = createSafeActionClient();

export const addPost = action(schema, async (input) => {
	const { name, content } = input;

	const { data, error } = await supabase.from("post").insert({
		name,
		content,
	});

	if (error) {
		throw error;
	}
	return data;
});
