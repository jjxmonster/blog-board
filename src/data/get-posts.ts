import { getPosts } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = () => {
	return useQuery({
		queryFn: async () => getPosts(),
		queryKey: ["landing-posts"],
	});
};
