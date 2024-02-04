"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { createCategorySchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";
import type { Category, PostRelation } from "@/types/common";

export const action = createSafeActionClient();

export const addCategory = action(createCategorySchema, async (input) => {
	const session = await getServerSession(authOptions);

	if (!session) throw new Error("No session found");

	const { name, description } = input;

	const { data, error } = await supabase.from("categories").insert({
		name,
		description,
	});

	if (error) {
		throw error;
	}
	return data;
});

export const getCategories = async () => {
	const { data, error } = await supabase
		.from("categories")
		.select("*, posts(id)");

	if (error) {
		throw error;
	}
	return data as Category<PostRelation>[];
};

export const getDataForCategoryPage = async (slug: string) => {
	const { data, error } = await supabase
		.from("categories")
		.select("*, posts(*, profiles( * ))")
		.eq("slug", slug);

	if (error) {
		throw error;
	}
	return data;
};
