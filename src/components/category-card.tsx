import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { type Category } from "@/types/common";
import { Badge } from "./ui/badge";

interface CategoryCardProps {
	category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{category.name}</CardTitle>
				<CardDescription>{category.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Badge variant="secondary" className="w-fit">
					3 Posts
				</Badge>
			</CardFooter>
		</Card>
	);
};
