"use server";

import { createSafeActionClient } from "next-safe-action";
import { supabase } from "@/services/supabase";
import { createCategorySchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
	const response = await supabase.from("categories").select("*");

	return response.data;
};
