import { PostCard } from "@/components/post-card";
import type { CategoryRelation, Post, ProfilesRelation } from "@/types/common";

interface LastPostsProps {
	posts: Post<CategoryRelation & ProfilesRelation>[];
}

export const LastPosts = ({ posts }: LastPostsProps) => {
	if (!posts) return null;

	return (
		<section className="mt-20">
			<h2 className="mb-5 text-3xl font-bold">Last Posts</h2>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
				{posts.map((post) => (
					<PostCard post={post} key={post.id} />
				))}
			</div>
		</section>
	);
};
