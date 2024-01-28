import { getPosts } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";

export const useGetPost = () => {
	return useQuery({
		queryFn: async () => getPosts(),
		queryKey: ["posts"],
	});
};
