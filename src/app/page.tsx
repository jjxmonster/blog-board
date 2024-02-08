import { getLastPosts } from "@/actions/post";
import { LandingHeader } from "@/views/landing-header";
import { LastPosts } from "@/views/last-posts";

export default async function Home() {
	const posts = await getLastPosts();

	return (
		<section className="flex w-full flex-col items-center justify-center gap-10 px-6">
			<LandingHeader />
			<LastPosts posts={posts} />
		</section>
	);
}
