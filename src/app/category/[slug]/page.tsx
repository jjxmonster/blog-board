import { getCategories, getDataForCategoryPage } from "@/actions/categories";
import { CategoryPageView } from "@/views/category-page";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const generateStaticParams = async () => {
	const categories = await getCategories();

	return categories.map((category) => ({
		params: {
			slug: category.slug,
		},
	}));
};

export default async function CategoryPage({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const data = await getDataForCategoryPage(slug);

	if (!data.length || !data) {
		return notFound();
	}

	return <CategoryPageView data={data[0]} />;
}
