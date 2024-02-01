"use client";

import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPost } from "@/actions/post";

import { createPostSchema } from "@/lib/schemas";
import type { CreatePostSchemaType } from "@/types/form";
import { useEffect } from "react";
import { toast } from "sonner";
import { MarkdownPreview } from "@/components/markdown-preview";
import { CreatePostForm } from "@/components/create-post-form";
import { useGetCategories } from "@/data/get-posts";
import { redirect } from "next/navigation";

export const CreatePostFormContainer = () => {
	const { execute, status, result } = useAction(addPost);
	const { data: categories } = useGetCategories();

	const isLoading = status === "executing";
	const form = useForm<CreatePostSchemaType>({
		resolver: zodResolver(createPostSchema),
		defaultValues: {
			title: "",
			content: "",
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: CreatePostSchemaType) => {
		const category = categories?.find(({ id }) => String(id) === data.category)
			?.id as number;
		execute({ ...data, category });
		form.reset();
	};

	useEffect(() => {
		if (status === "hasSucceeded") {
			toast.success("Post created successfully!");
		}
	}, [status]);

	if (!categories) {
		redirect("/");
	}

	return (
		<div className="grid grid-cols-2">
			<div>
				<h2 className="text-4xl font-medium">Create Post</h2>
				<CreatePostForm
					categories={categories}
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
