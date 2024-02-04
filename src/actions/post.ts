"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { createPostSchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { CategoryRelation, ProfilesRelation, Post } from "@/types/common";
import slugify from "voca/slugify";

export const action = createSafeActionClient();

export const addPost = action(createPostSchema, async (input) => {
	const session = await getServerSession(authOptions);

	if (!session) throw new Error("No session found");
	const { title, content, description, category } = input;

	const { data, error } = await supabase.from("posts").insert({
		title,
		content,
		description,
		author_id: session.user.id,
		category_id: Number(category),
		slug: slugify(title),
	});

	if (error) {
		throw error;
	}
	return data;
});

export const getLastPosts = async () => {
	const { data, error } = await supabase
		.from("posts")
		.select(
			"id, content, title, description, created_at, slug, profiles ( * ), categories( * )",
		)
		.limit(3);

	if (error) {
		throw error;
	}
	return data as Post<CategoryRelation & ProfilesRelation>[];
};

export const getAllPosts = async () => {
	const { data, error } = await supabase.from("posts").select("*");

	if (error) {
		throw error;
	}
	return data as Post<{}>[];
};

export const getPostBySlug = async (slug: string) => {
	const { data, error } = await supabase
		.from("posts")
		.select(
			"id, content, title, description, created_at, profiles ( * ), categories( * )",
		)
		.eq("slug", slug)
		.single();

	if (error) {
		throw error;
	}
	return data as Post<CategoryRelation & ProfilesRelation>;
};
