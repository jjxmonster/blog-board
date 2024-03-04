import { getAllPosts, getPostBySlug } from "@/actions/post";
import { PostPageView } from "@/views/post-page.view";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: { slug: string };
};

export const generateStaticParams = async () => {
	const posts = await getAllPosts();
	return posts.map((post) => ({
		params: { slug: post.slug },
	}));
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await getPostBySlug(params.slug);

	return {
		title: post.title,
		description: post.description,
	};
}

export default async function CategoryPage({ params: { slug } }: Props) {
	const post = await getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	return <PostPageView post={post} />;
}
