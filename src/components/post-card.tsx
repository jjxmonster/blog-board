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

interface PostCardProps {
	post: Post<CategoryRelation & ProfilesRelation>;
}

export const PostCard = ({ post }: PostCardProps) => {
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
				<CardFooter>
					<p className="flex gap-1 text-sm text-gray-500">
						<span>{profiles?.name}</span>/<span>{parseDate(created_at)}</span>
					</p>
				</CardFooter>
			</Link>
		</Card>
	);
};
