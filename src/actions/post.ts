"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { createFormSchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const action = createSafeActionClient();

export const addPost = action(createFormSchema, async (input) => {
	const session = await getServerSession(authOptions);

	if (!session) throw new Error("No session found");

	const { title, content } = input;

	const { data, error } = await supabase.from("post").insert({
		title,
		content,
		author_id: session.user.id,
	});

	if (error) {
		throw error;
	}
	return data;
});

export const getPosts = async () => {
	const posts = await supabase.from("post").select("*");

	if (!posts) return { error: "No posts found" };

	return { data: posts };
};
