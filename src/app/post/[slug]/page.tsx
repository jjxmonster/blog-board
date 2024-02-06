import { getAllPosts, getPostBySlug } from "@/actions/post";
import { PostPageView } from "@/views/post-page.view";
import { notFound } from "next/navigation";

export const revalidate = 6000;
export const generateStaticParams = async () => {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}));
};

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
