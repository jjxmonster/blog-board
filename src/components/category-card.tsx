import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { type Category } from "@/types/common";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface CategoryCardProps {
	category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
	const { name, description, slug, posts } = category;
	return (
		<Card>
			<Link href={`/category/${slug}`}>
				<CardHeader>
					<CardTitle>{name}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardFooter>
					<Badge variant="secondary" className="w-fit">
						{posts.length} Articles
					</Badge>
				</CardFooter>
			</Link>
		</Card>
	);
};
