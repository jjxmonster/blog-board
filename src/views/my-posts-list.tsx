import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import type { CategoryRelation, Post, ProfilesRelation } from "@/types/common";
import Link from "next/link";

interface MyPostsListProps {
	posts: Post<CategoryRelation & ProfilesRelation>[];
}

export const MyPostsList = ({ posts }: MyPostsListProps) => {
	if (!posts.length) {
		return (
			<div className="flex w-full flex-col items-center gap-4">
				<h2 className="text-gray-300">No posts yet</h2>
				<Button asChild>
					<Link href="/create-post">Create a new post</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
			{posts.map((post) => (
				<PostCard showActions post={post} key={post.id} />
			))}
		</div>
	);
};
