import { getPostBySlug } from "@/actions/post";
import { PostPageView } from "@/views/post-page.view";
import { notFound } from "next/navigation";

export default async function CategoryPage({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const post = await getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	return <PostPageView post={post} />;
}
