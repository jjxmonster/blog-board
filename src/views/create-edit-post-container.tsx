"use client";

import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";

import { createPostSchema } from "@/lib/schemas";
import type { CreatePostSchemaType } from "@/types/form";
import { useEffect } from "react";
import { toast } from "sonner";
import { MarkdownPreview } from "@/components/markdown-preview";
import { CreatePostForm } from "@/components/create-post-form";
import { useGetCategories } from "@/data/get-categories";
import { redirect } from "next/navigation";
import { type SafeAction } from "next-safe-action";
import type { ZodType, ZodTypeDef } from "zod";
import type { Post } from "@/types/common";
import { LoadingIndicator } from "@/components/ui/loading-indicator";

interface CreateEditPostFormContainerProps {
	action: SafeAction<ZodType<CreatePostSchemaType, ZodTypeDef, unknown>, null>;
	isEdit: boolean;
	post?: Post<unknown>;
}

export const CreateEditPostFormContainer = ({
	action,
	isEdit,
	post,
}: CreateEditPostFormContainerProps) => {
	const { execute, status, result } = useAction(action);
	const { data: categories, isLoading: isCategoriesLoading } =
		useGetCategories();

	const isLoading = status === "executing";
	const form = useForm<CreatePostSchemaType>({
		resolver: zodResolver(createPostSchema),
		defaultValues: {
			title: isEdit ? post!.title! : "",
			content: isEdit ? post!.content : "",
			description: isEdit ? post!.description! : "",
			category_slug: "",
			category: isEdit ? String(post!.category_id) : "",
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: CreatePostSchemaType) => {
		const category_slug = categories?.find(
			(category) => category.id === Number(data.category),
		)?.slug;

		if (isEdit) {
			execute({ ...data, post_id: post?.id });
		} else {
			execute({
				...data,
				category_slug,
			});
		}
		form.reset();
	};

	useEffect(() => {
		if (status === "hasSucceeded") {
			toast.success(`Post ${isEdit ? "updated" : "created"} successfully!`);
		}
	}, [status, isEdit]);

	if (isCategoriesLoading) {
		return <LoadingIndicator />;
	}
	if (!categories) {
		redirect("/");
	}

	return (
		<div className="grid grid-cols-1 px-6 md:grid-cols-2 md:px-0">
			<div>
				<h1 className="text-4xl font-medium">
					{isEdit ? "Edit" : "Create"} Post
				</h1>
				<CreatePostForm
					isEdit={isEdit}
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
