import { type createFormSchema } from "@/lib/schemas";
import type * as z from "zod";

export type CreateFormSchemaType = z.infer<typeof createFormSchema>;
