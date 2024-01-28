"use client";
import { Card } from "@/components/ui/card";
import { parse } from "marked";

export const MarkdownPreview = ({ content }: { content: string }) => {
	const createMarkup = () => {
		return { __html: parse(content) };
	};
	return (
		<div>
			<h3 className="text-2xl">Preview</h3>
			<Card className="mt-5 max-h-[500px] overflow-y-scroll p-10">
				<div
					className="prose overflow-hidden dark:prose-invert"
					dangerouslySetInnerHTML={createMarkup()}
				/>
			</Card>
		</div>
	);
};
