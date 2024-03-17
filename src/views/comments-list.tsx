"use client";

import { CommentCard } from "@/components/comment-card";
import { useGetCommentsByPostID } from "@/data/get-comments";

export const CommentsList = ({ id }: { id: number }) => {
	const { data } = useGetCommentsByPostID(id);

	return (
		<div className="flex flex-col space-y-5">
			{data?.map((comment) => (
				<CommentCard key={comment.id} comment={comment} />
			))}
		</div>
	);
};
