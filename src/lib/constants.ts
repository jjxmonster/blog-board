import { createFormValidationObject } from "./schemas";

export const createFormItems: {
	name: keyof typeof createFormValidationObject;
	type: string;
	label: string;
	placeholder: string;
	className?: string;
}[] = [
	{
		name: "title",
		type: "text",
		label: "Title",
		placeholder: "My awesome post",
	},
	{
		name: "description",
		type: "text",
		label: "Description",
		placeholder: "Short description",
	},
	{
		name: "content",
		type: "textarea",
		label: "Content",
		placeholder: "Start writing your post here...",
		className: "min-h-[300px]",
	},
];
