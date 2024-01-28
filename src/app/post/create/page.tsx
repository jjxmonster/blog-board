import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CreatePostFormContainer } from "@/views/create-post-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreatePost() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/signin?callbackUrl=/post/create");
	}

	return (
		<section className="">
			<h2 className="text-4xl font-medium">Create Post</h2>
			<CreatePostFormContainer />
		</section>
	);
}
