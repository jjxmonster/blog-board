import {
	type createCategoryValidationObject,
	type createPostValidationObject,
} from "./schemas";

export const createPostItems: {
	name: keyof typeof createPostValidationObject;
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
		name: "category",
		type: "select",
		label: "Category",
		placeholder: "Select a category",
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

export const createCategoryItems: {
	name: keyof typeof createCategoryValidationObject;
	type: string;
	label: string;
	placeholder: string;
	className?: string;
}[] = [
	{
		name: "name",
		type: "text",
		label: "Name",
		placeholder: "My category",
	},
	{
		name: "description",
		type: "text",
		label: "Description",
		placeholder: "Short description",
	},
];
