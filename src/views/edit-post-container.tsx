"use client";

import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { editPost } from "@/actions/post";

import { createPostSchema } from "@/lib/schemas";
import type { CreatePostSchemaType } from "@/types/form";
import { useEffect } from "react";
import { toast } from "sonner";
import { MarkdownPreview } from "@/components/markdown-preview";
import { CreatePostForm } from "@/components/create-post-form";
import { useGetCategories } from "@/data/get-categories";
import { redirect } from "next/navigation";
import { type Post } from "@/types/common";
import { LoadingIndicator } from "@/components/ui/loading-indicator";

interface EditPostFormContainerProps {
	data: Post<null>;
}

export const EditPostFormContainer = ({ data }: EditPostFormContainerProps) => {
	const { title, content, description, category_id, id } = data;
	const { execute, status, result } = useAction(editPost);
	const { data: categories, isLoading: isCategoriesLoading } =
		useGetCategories();

	const isLoading = status === "executing";
	const form = useForm<CreatePostSchemaType>({
		resolver: zodResolver(createPostSchema),
		defaultValues: {
			title,
			content,
			description,
			category: String(category_id),
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: CreatePostSchemaType) => {
		execute({ ...data, post_id: id });
	};

	useEffect(() => {
		if (status === "hasSucceeded") {
			toast.success("Post updated successfully!");
		}
	}, [status]);

	if (isCategoriesLoading) {
		return <LoadingIndicator />;
	}
	if (!categories) {
		redirect("/");
	}

	return (
		<div className="grid grid-cols-1 px-6 md:grid-cols-2">
			<div>
				<h1 className="text-4xl font-medium">Edit Post</h1>
				<CreatePostForm
					isEdit
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
