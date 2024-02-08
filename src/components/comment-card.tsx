import type { Comment, ProfilesRelation } from "@/types/common";
import { Card, CardContent, CardHeader } from "./ui/card";
import { parseDate } from "@/lib/utils";

interface CommentCardProps {
	comment: Comment<ProfilesRelation>;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
	const { content, profiles, created_at } = comment;
	return (
		<Card>
			<CardHeader className="pb-1">
				<p className="flex gap-1 text-sm text-gray-500">
					<span>{profiles?.name}</span>/<span>{parseDate(created_at)}</span>
				</p>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
		</Card>
	);
};
