import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { parseDate } from "@/lib/utils";
import type { CategoryRelation, Post, ProfilesRelation } from "@/types/common";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { DeletePostDialog } from "./delete-post-dialog";

interface PostCardProps {
	post: Post<CategoryRelation & ProfilesRelation>;
	showActions?: boolean;
}

export const PostCard = ({ post, showActions = false }: PostCardProps) => {
	const { title, description, created_at, profiles, categories, slug } = post;
	return (
		<Card className="cursor-pointer">
			<Link href={`/post/${slug}`}>
				<CardHeader>
					<Badge variant="outline" className="mb-5 w-fit">
						{categories.name}
					</Badge>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
			</Link>
			<CardFooter className="flex flex-col items-start">
				<p className="flex gap-1 text-sm text-gray-500">
					<span>{profiles?.name}</span>/<span>{parseDate(created_at)}</span>
				</p>
				{showActions && (
					<div className="mt-5 flex w-full justify-between">
						<DeletePostDialog postId={post.id} />
						<Button size="sm" variant="default">
							Edit
						</Button>
					</div>
				)}
			</CardFooter>
		</Card>
	);
};
