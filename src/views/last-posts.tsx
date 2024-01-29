"use client";

import { useGetPosts } from "@/data/get-posts";

export const LastPosts = () => {
	const { data: posts } = useGetPosts();

	console.log(posts);
	return <div></div>;
};
