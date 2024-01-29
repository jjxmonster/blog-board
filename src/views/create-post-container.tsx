"use client";

import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPost } from "@/actions/post";

import { createFormSchema } from "@/lib/schemas";
import type { CreateFormSchemaType } from "@/types/form";
import { useEffect } from "react";
import { toast } from "sonner";
import { MarkdownPreview } from "@/components/markdown-preview";
import { CreatePostForm } from "@/components/create-post-form";

export const CreatePostFormContainer = () => {
	const { execute, status, result } = useAction(addPost);
	const isLoading = status === "executing";
	const form = useForm<CreateFormSchemaType>({
		resolver: zodResolver(createFormSchema),
		defaultValues: {
			title: "",
			content: "",
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: CreateFormSchemaType) => {
		execute(data);
		form.reset();
	};

	useEffect(() => {
		if (status === "hasSucceeded") {
			toast.success("Post created successfully!");
		}
	}, [status]);

	return (
		<div className="grid grid-cols-2">
			<div>
				<h2 className="text-4xl font-medium">Create Post</h2>
				<CreatePostForm
					result={result}
					onSubmit={onSubmit}
					form={form}
					isLoading={isLoading}
				/>
			</div>
			<MarkdownPreview content={form.watch("content")} />
		</div>
	);
};
