import * as z from "zod";

export const schema = z.object({
	name: z.string().min(3),
	content: z.string().min(10),
});
