import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const useProtectedRoute = async () => {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/signin?callbackUrl=/create-post");
	}
};
