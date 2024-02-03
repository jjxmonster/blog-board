import { getCategories } from "@/actions/categories";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
	return useQuery({
		queryFn: async () => getCategories(),
		queryKey: ["categories"],
	});
};
