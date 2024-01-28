import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CreatePostFormContainer } from "@/views/create-post-container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreatePost() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/signin?callbackUrl=/post/create");
	}

	return (
		<section>
			<CreatePostFormContainer />
		</section>
	);
}
