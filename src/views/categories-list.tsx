import { CategoryCard } from "@/components/category-card";
import { type Category } from "@/types/common";

interface CategoriesListProps {
	categories: Category[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
	return (
		<ul className="grid grid-cols-3">
			{categories.map((category) => {
				return (
					<li key={category.id}>
						<CategoryCard category={category} />
					</li>
				);
			})}
		</ul>
	);
};
