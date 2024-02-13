import { getPostsByUserID } from "@/actions/post";
import { useProtectedRoute } from "@/hooks/protected-route";
import { authOptions } from "@/lib/auth-config";
import { MyPostsContainerAuthWrapper } from "@/views/my-posts-container";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";
import { getServerSession } from "next-auth";

export default async function MyPosts() {
	await useProtectedRoute();
	const session = await getServerSession(authOptions);
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["user-posts", session!.user.id],
		queryFn: () => getPostsByUserID(session!.user.id),
	});

	return (
		<section>
			<h1 className="mb-10 text-4xl font-medium">My Posts</h1>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<MyPostsContainerAuthWrapper />
			</HydrationBoundary>
		</section>
	);
}
