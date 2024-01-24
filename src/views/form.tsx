"use client";

import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPost } from "@/actions/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type * as z from "zod";
import { schema } from "@/lib/schemas";
import { Loader2 } from "lucide-react";

export const Form = () => {
	const { execute, status, result } = useAction(addPost);
	const isLoading = status === "executing";
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			content: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof schema>) => {
		execute(data);
	};

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className="flex max-w-md flex-col gap-5 p-10"
		>
			<Input type="text" {...form.register("name")} placeholder="Name" />
			<Input type="text" {...form.register("content")} placeholder="Content" />
			<Button disabled={isLoading} type="submit">
				{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
				Submit
			</Button>
			{result.serverError && <p>{result.serverError}</p>}
		</form>
	);
};
