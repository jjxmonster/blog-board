import { isLoggedUserAllowed } from "@/actions/post";
import { useProtectedRoute } from "@/hooks/protected-route";
import { authOptions } from "@/lib/auth-config";
import { EditPostFormContainer } from "@/views/edit-post-container";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export default async function EditPostPage({
	params: { id },
}: {
	params: { id: string };
}) {
	await useProtectedRoute();

	const session = await getServerSession(authOptions);
	const data = await isLoggedUserAllowed(session!.user.id, id);

	if (!data.allowed || !data.post) {
		return notFound();
	}

	return (
		<section>
			<EditPostFormContainer data={data.post} />
		</section>
	);
}
