import { getCategories } from "@/actions/categories";
import { addPost } from "@/actions/post";
import { useProtectedRoute } from "@/hooks/protected-route";
import { CreateEditPostFormContainer } from "@/views/create-edit-post-container";
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
				<CreateEditPostFormContainer isEdit={false} action={addPost} />
			</HydrationBoundary>
		</section>
	);
}
