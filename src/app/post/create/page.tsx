import { getCategories } from "@/actions/categories";
import { useProtectedRoute } from "@/hooks/protected-route";
import { CreatePostFormContainer } from "@/views/create-post-container";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";

export default async function CreatePost() {
	await useProtectedRoute();
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["categories"],
		queryFn: getCategories,
	});
	return (
		<section>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<CreatePostFormContainer />
			</HydrationBoundary>
		</section>
	);
}
