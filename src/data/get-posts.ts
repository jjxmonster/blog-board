import { getCategories } from "@/actions/categories";
import { getLastPosts } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";

export const useGetLastPosts = () => {
	return useQuery({
		queryFn: async () => getLastPosts(),
		queryKey: ["landing-posts"],
	});
};
export const useGetCategories = () => {
	return useQuery({
		queryFn: async () => getCategories(),
		queryKey: ["categories"],
	});
};
