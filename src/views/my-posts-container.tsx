"use client";
import { LoadingIndicator } from "@/components/ui/loading-indicator";
import { useGetPostsByUserID } from "@/data/get-posts";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { MyPostsList } from "./my-posts-list";

const MyPostsContainer = () => {
	const session = useSession();

	const { data, isLoading } = useGetPostsByUserID(session.data!.user.id);

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (!data) {
		toast.error(
			"Something went wrong while getting posts, please try again later",
		);

		return null;
	}

	return <MyPostsList posts={data} />;
};

export const MyPostsContainerAuthWrapper = () => {
	const session = useSession();

	if (session.status === "loading") {
		return <LoadingIndicator />;
	}

	return <MyPostsContainer />;
};
