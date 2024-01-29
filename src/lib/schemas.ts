import * as z from "zod";

export const createFormValidationObject = {
	title: z.string().min(5, {
		message: "Title must be at least 5 characters.",
	}),
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

export const createFormSchema = z.object(createFormValidationObject);
