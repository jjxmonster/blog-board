import {
	type addCommentSchema,
	type createCategorySchema,
	type createPostSchema,
} from "@/lib/schemas";
import type * as z from "zod";

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
export type CreateCategorySchemaType = z.infer<typeof createCategorySchema>;
export type AddCommentSchemaType = z.infer<typeof addCommentSchema>;
