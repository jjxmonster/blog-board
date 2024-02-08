"use server";
import type { Comment, ProfilesRelation } from "@/types/common";
import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { addCommentSchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";

export const action = createSafeActionClient();

export const addComment = action(addCommentSchema, async (input) => {
	const session = await getServerSession(authOptions);

	if (!session) throw new Error("No session found");

	const { content } = input;

	const { data, error } = await supabase.from("comments").insert({
		content,
		author_id: session.user.id,
		post_id: input.post_id,
	});

	if (error) {
		throw error;
	}
	return data;
});

export const getCommentsByPostID = async (id: number) => {
	const { data, error } = await supabase
		.from("comments")
		.select("*, profiles(*)")
		.eq("post_id", id)
		.order("created_at", { ascending: false });

	if (error) {
		throw error;
	}
	return data as Comment<ProfilesRelation>[];
};
