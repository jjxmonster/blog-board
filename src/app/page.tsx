import { getPosts } from "@/actions/post";
import { LandingHeader } from "@/views/landing-header";
import { LastPosts } from "@/views/last-posts";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";

export default async function Home() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["landing-posts"],
		queryFn: getPosts,
	});

	return (
		<div className="flex w-full flex-col items-center justify-center gap-10">
			<LandingHeader />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<LastPosts />
			</HydrationBoundary>
		</div>
	);
}
