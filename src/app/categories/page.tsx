import { getCategories } from "@/actions/categories";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default async function Categories() {
	const categories = await getCategories();

	if (!categories) {
		redirect("/");
	}

	return (
		<section>
			<h1 className="text-4xl">Categories</h1>
			<div>
				{categories.map((category) => {
					return (
						<Card key={category.id}>
							<CardHeader>{category.name}</CardHeader>
							<CardDescription>{category.description}</CardDescription>
						</Card>
					);
				})}
			</div>
		</section>
	);
}
