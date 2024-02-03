import { getCategories } from "@/actions/categories";
import { CategoriesList } from "@/views/categories-list";
import { redirect } from "next/navigation";

export default async function Categories() {
	const categories = await getCategories();

	if (!categories) {
		redirect("/");
	}

	return (
		<section>
			<h1 className="mb-10 text-4xl font-medium">Categories</h1>
			<CategoriesList categories={categories} />
		</section>
	);
}
