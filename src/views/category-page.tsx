import { PostCard } from "@/components/post-card";
import { Badge } from "@/components/ui/badge";
import type { Category, PostRelation } from "@/types/common";

interface CategoryPageViewProps {
	data: Category<PostRelation>;
}
export const CategoryPageView = ({ data }: CategoryPageViewProps) => {
	const { posts, ...category } = data;
	const { name, description } = category;

	return (
		<section>
			<div className="mb-10 space-y-3">
				<h1 className="text-4xl font-medium">{name}</h1>
				<p className="text-xl">{description}</p>
				<Badge variant="secondary" className="w-fit">
					{posts.length} Articles
				</Badge>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
				{posts.map((post) => (
					<PostCard
						post={{
							...post,
							categories: category,
						}}
						key={post.id}
					/>
				))}
			</div>
		</section>
	);
};
