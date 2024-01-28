import * as z from "zod";

export const createFormSchema = z.object({
	title: z.string().min(3),
	content: z.string().min(10),
});
