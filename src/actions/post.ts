"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { createPostSchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const action = createSafeActionClient();

export const addPost = action(createPostSchema, async (input) => {
	const session = await getServerSession(authOptions);

	if (!session) throw new Error("No session found");

	const { title, content, description } = input;

	const { data, error } = await supabase.from("posts").insert({
		title,
		content,
		description,
		author_id: session.user.id,
	});

	if (error) {
		throw error;
	}
	return data;
});

export const getLastPosts = async () => {
	const response = await supabase
		.from("posts")
		.select("id, content, title, description, created_at, profiles ( * )")
		.limit(3);

	return response.data;
};
