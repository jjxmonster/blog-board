import { getCommentsByPostID } from "@/actions/comments";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";
import { CommentsList } from "./comments-list";
import { AddCommentForm } from "@/components/add-comment-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";

export const CommentsContainer = async ({ id }: { id: number }) => {
	const queryClient = new QueryClient();
	const session = await getServerSession(authOptions);

	await queryClient.prefetchQuery({
		queryKey: ["comments", id],
		queryFn: () => getCommentsByPostID(id),
	});

	return (
		<div className="mt-20 border-t pt-5">
			<h2 className="mb-5 text-2xl font-bold">Comments</h2>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<CommentsList id={id} />
			</HydrationBoundary>
			{session && <AddCommentForm post_id={id} />}
		</div>
	);
};
