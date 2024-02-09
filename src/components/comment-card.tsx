import type { Comment, ProfilesRelation } from "@/types/common";
import { Card, CardContent, CardHeader } from "./ui/card";
import { parseDate } from "@/lib/utils";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface CommentCardProps {
	comment: Comment<ProfilesRelation>;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
	const { content, profiles, created_at } = comment;
	return (
		<Card>
			<CardHeader className="pb-2">
				<div className="flex gap-1 text-sm text-gray-500">
					<Avatar className="h-5 w-5">
						<AvatarImage src={profiles?.avatar_url as string} />
					</Avatar>
					<span>{profiles?.name}</span>/<span>{parseDate(created_at)}</span>
				</div>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
		</Card>
	);
};
