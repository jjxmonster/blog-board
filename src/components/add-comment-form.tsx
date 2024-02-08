"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { addCommentSchema } from "@/lib/schemas";
import { type AddCommentSchemaType } from "@/types/form";
import { addComment } from "@/actions/comments";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

interface AddCommentFormProps {
	post_id: number;
}

export const AddCommentForm = ({ post_id }: AddCommentFormProps) => {
	const { execute, status } = useAction(addComment);
	const queryClient = useQueryClient();

	const form = useForm<AddCommentSchemaType>({
		resolver: zodResolver(addCommentSchema),
	});

	const onSubmit = async (data: AddCommentSchemaType) => {
		execute({ ...data, post_id });

		if (status === "hasSucceeded") {
			toast.success("Comment added successfully!");
			await queryClient.invalidateQueries({ queryKey: ["comments", post_id] });
		}

		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="mt-5 w-full space-y-3"
			>
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormControl>
							<Textarea
								placeholder="Write a comment..."
								className="w-full resize-none"
								{...field}
							/>
						</FormControl>
					)}
				/>
				<Button type="submit">Add comment</Button>
			</form>
		</Form>
	);
};
