import { getLastPosts, getPostsByUserID } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";

export const useGetLastPosts = () => {
	return useQuery({
		queryFn: async () => getLastPosts(),
		queryKey: ["landing-posts"],
	});
};
export const useGetPostsByUserID = (id: string) => {
	return useQuery({
		queryKey: ["user-posts", id],
		queryFn: async () => getPostsByUserID(id),
	});
};
