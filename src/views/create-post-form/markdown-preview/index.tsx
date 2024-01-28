"use client";
import { Card } from "@/components/ui/card";
import { parse } from "marked";

export const MarkdownPreview = ({ content }: { content: string }) => {
	const createMarkup = () => {
		return { __html: parse(content) };
	};
	return (
		<div className="py-10">
			<h3 className="text-2xl">Preview</h3>
			<Card className="mt-5 p-10">
				<div
					className="prose dark:prose-invert overflow-hidden"
					dangerouslySetInnerHTML={createMarkup()}
				/>
			</Card>
		</div>
	);
};
