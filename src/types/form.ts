import { type createPostSchema } from "@/lib/schemas";
import type * as z from "zod";

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
