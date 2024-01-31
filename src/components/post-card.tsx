import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { parseDate } from "@/lib/utils";
import type { Post } from "@/types/common";

interface PostCardProps {
	post: Pick<Post, "id" | "title" | "description" | "created_at" | "profiles">;
}

export const PostCard = ({ post }: PostCardProps) => {
	const { title, description, created_at, profiles } = post;
	return (
		<Card className="cursor-pointer">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<p className="flex gap-1 text-sm text-gray-500">
					<span>{profiles?.name}</span>/<span>{parseDate(created_at)}</span>
				</p>
			</CardFooter>
		</Card>
	);
};
