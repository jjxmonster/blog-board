"use client";

import { Loader2 } from "lucide-react";
import { type UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import type { CreateCategorySchemaType } from "@/types/form";
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
import { createCategoryItems } from "@/lib/constants";

interface CreateCategoryFormProps {
	form: UseFormReturn<CreateCategorySchemaType>;
	isLoading: boolean;
	onSubmit: (data: CreateCategorySchemaType) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	result: HookResult<any, null>;
}

export const CreateCategoryForm = ({
	form,
	isLoading,
	result,
	onSubmit,
}: CreateCategoryFormProps) => {
	const { handleSubmit } = form;

	const renderFormItems = createCategoryItems.map(
		({ name, label, placeholder }) => (
			<FormField
				key={name}
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input placeholder={placeholder} {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		),
	);

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-md space-y-5  py-10"
			>
				{renderFormItems}

				<Button disabled={isLoading} type="submit">
					{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					Create
				</Button>
				{result.serverError && <p>{result.serverError}</p>}
			</form>
		</Form>
	);
};
