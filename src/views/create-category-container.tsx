"use client";

import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";

import type { CreateCategorySchemaType } from "@/types/form";
import { useEffect } from "react";
import { toast } from "sonner";
import { createCategorySchema } from "@/lib/schemas";
import { CreateCategoryForm } from "@/components/create-category-form";
import { addCategory } from "@/actions/categories";

export const CreateCategoryFormContainer = () => {
	const { execute, status, result } = useAction(addCategory);
	const isLoading = status === "executing";
	const form = useForm<CreateCategorySchemaType>({
		resolver: zodResolver(createCategorySchema),
		defaultValues: {
			name: "",
			description: "",
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: CreateCategorySchemaType) => {
		execute(data);
		form.reset();
	};

	useEffect(() => {
		if (status === "hasSucceeded") {
			toast.success("Category created successfully!");
		}
	}, [status]);

	return (
		<div className="grid grid-cols-2">
			<div>
				<h2 className="text-4xl font-medium">Create Category</h2>
				<CreateCategoryForm
					result={result}
					onSubmit={onSubmit}
					form={form}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};
