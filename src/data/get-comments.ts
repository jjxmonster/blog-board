import { getCommentsByPostID } from "@/actions/comments";
import { useQuery } from "@tanstack/react-query";

export const useGetCommentsByPostID = (id: number) => {
	return useQuery({
		queryFn: async () => getCommentsByPostID(id),
		queryKey: ["comments", id],
	});
};
