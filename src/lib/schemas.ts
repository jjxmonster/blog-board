import * as z from "zod";

export const createPostValidationObject = {
	title: z.string().min(5, {
		message: "Title must be at least 5 characters.",
	}),
	category: z.string(),
	description: z
		.string()
		.min(10, {
			message: "Description must be at least 10 characters.",
		})
		.max(50, {
			message: "Description must be at most 50 characters.",
		}),
	content: z.string().min(10, {
		message: "Content must be at least 10 characters.",
	}),
} as const;

export const createPostSchema = z.object(createPostValidationObject);

export const createCategoryValidationObject = {
	name: z.string().min(5, {
		message: "Name must be at least 3 characters.",
	}),
	description: z
		.string()
		.min(5, {
			message: "Description must be at least 5 characters.",
		})
		.max(50, {
			message: "Description must be at most 50 characters.",
		}),
} as const;

export const createCategorySchema = z.object(createCategoryValidationObject);
