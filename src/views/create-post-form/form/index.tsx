"use client";

import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import type { CreateFormSchemaType } from "@/types/form";
import { Input } from "@/components/ui/input";
import { type HookResult } from "next-safe-action/hooks";

interface CreatePostFormProps {
	form: UseFormReturn<CreateFormSchemaType>;
	isLoading: boolean;
	onSubmit: (data: CreateFormSchemaType) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	result: HookResult<any, null>;
}

export const CreatePostForm = ({
	form,
	isLoading,
	result,
	onSubmit,
}: CreatePostFormProps) => {
	const { handleSubmit, register } = form;
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex max-w-md flex-col gap-5 py-10"
		>
			<Input type="text" {...register("name")} placeholder="Name" />
			<Textarea
				{...register("content")}
				className="min-h-[300px]"
				placeholder="Start creating you post."
			/>

			<Button disabled={isLoading} type="submit">
				{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
				Submit
			</Button>
			{result.serverError && <p>{result.serverError}</p>}
		</form>
	);
};
