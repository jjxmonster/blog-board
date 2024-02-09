"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { createPostSchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import type { CategoryRelation, ProfilesRelation, Post } from "@/types/common";
import slugify from "voca/slugify";
import { authOptions } from "@/lib/auth-config";
import { revalidatePath } from "next/cache";

export const action = createSafeActionClient();

export const addPost = action(createPostSchema, async (input) => {
	const session = await getServerSession(authOptions);
	if (!session) throw new Error("No session found");

	const { title, content, description, category, category_slug } = input;
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

	revalidatePath(`/category/${category_slug}`);
	revalidatePath("/categories");
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
