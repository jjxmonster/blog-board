import { Badge } from "@/components/ui/badge";
import { parseDate } from "@/lib/utils";
import type { CategoryRelation, Post, ProfilesRelation } from "@/types/common";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CommentsContainer } from "./comments-container";

interface PostPageViewProps {
	post: Post<CategoryRelation & ProfilesRelation>;
}

export const PostPageView = async ({ post }: PostPageViewProps) => {
	const { title, profiles, created_at, categories, content } = post;
	return (
		<section className="mx-auto mb-20 max-w-4xl px-6">
			<div className="mb-10 flex flex-col items-center space-y-3">
				<h1 className="text-5xl font-medium">{title}</h1>
				<div className="flex space-x-2 py-3 text-sm text-gray-400">
					<Link href="/">{profiles?.name}</Link>
					<span>·</span>
					<time>{parseDate(created_at)}</time>
					<span>·</span>
					<Badge variant="outline" className="w-fit">
						{categories.name}
					</Badge>
				</div>
			</div>
			<article className="prose prose-invert max-w-none">
				<MDXRemote source={content} />
			</article>
			<CommentsContainer id={post.id} />
		</section>
	);
};
