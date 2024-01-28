"use client";
import { CreatePostForm } from "./form";
import { MarkdownPreview } from "./markdown-preview";
import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPost } from "@/actions/post";

import { createFormSchema } from "@/lib/schemas";
import type { CreateFormSchemaType } from "@/types/form";

export const CreatePostFormContainer = () => {
	const { execute, status, result } = useAction(addPost);
	const isLoading = status === "executing";
	const form = useForm<CreateFormSchemaType>({
		resolver: zodResolver(createFormSchema),
		defaultValues: {
			name: "",
			content: "",
		},
		mode: "onChange",
	});

	const onSubmit = async (data: CreateFormSchemaType) => {
		execute(data);
	};

	return (
		<div className="grid grid-cols-2">
			<CreatePostForm
				result={result}
				onSubmit={onSubmit}
				form={form}
				isLoading={isLoading}
			/>
			<MarkdownPreview content={form.watch("content")} />
		</div>
	);
};
