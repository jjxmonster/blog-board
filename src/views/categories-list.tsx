import { CategoryCard } from "@/components/category-card";
import { type PostRelation, type Category } from "@/types/common";

interface CategoriesListProps {
	categories: Category<PostRelation>[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
	return (
		<ul className="grid  gap-4 md:grid-cols-3">
			{categories.map((category) => {
				return (
					<li key={category.id} className="h-full">
						<CategoryCard category={category} />
					</li>
				);
			})}
		</ul>
	);
};
