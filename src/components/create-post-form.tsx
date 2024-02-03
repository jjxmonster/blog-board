"use client";

import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
	type ControllerRenderProps,
	type UseFormReturn,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import type { CreatePostSchemaType } from "@/types/form";
import { Input } from "@/components/ui/input";
import { type HookResult } from "next-safe-action/hooks";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { createPostItems } from "@/lib/constants";
import { type Category } from "@/types/common";
import { useCallback, useMemo } from "react";

interface CreatePostFormProps {
	form: UseFormReturn<CreatePostSchemaType>;
	isLoading: boolean;
	onSubmit: (data: CreatePostSchemaType) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	result: HookResult<any, null>;
	categories: Category[];
}

export const CreatePostForm = ({
	form,
	isLoading,
	result,
	onSubmit,
	categories,
}: CreatePostFormProps) => {
	const { handleSubmit } = form;

	const renderFormElement = useCallback(
		({
			type,
			placeholder,
			className,
			field,
		}: {
			type: string;
			placeholder: string;
			className?: string;
			field: ControllerRenderProps<CreatePostSchemaType>;
		}) => {
			switch (type) {
				case "textarea":
					return (
						<FormControl>
							<Textarea
								className={className}
								placeholder={placeholder}
								{...field}
							/>
						</FormControl>
					);
				case "select":
					return (
						<Select onValueChange={field.onChange}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Choose a Category" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectGroup>
									{categories.map((category) => (
										<SelectItem
											key={category.id}
											value={category.id.toString()}
										>
											{category.name}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					);
				default:
					return (
						<FormControl>
							<Input placeholder={placeholder} {...field} />
						</FormControl>
					);
			}
		},
		[categories],
	);

	const renderFormItems = useMemo(
		() =>
			createPostItems.map(({ name, label, placeholder, type, className }) => (
				<FormField
					key={name}
					control={form.control}
					name={name}
					render={({ field }) => (
						<FormItem>
							<FormLabel>{label}</FormLabel>
							{renderFormElement({ type, placeholder, className, field })}
							<FormMessage />
						</FormItem>
					)}
				/>
			)),
		[form.control, renderFormElement],
	);

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-md space-y-5 py-10"
			>
				{renderFormItems}

				<Button disabled={isLoading} type="submit">
					{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					Create
				</Button>
				{result.serverError && <p className="text-red">{result.serverError}</p>}
			</form>
		</Form>
	);
};
