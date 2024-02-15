import { authOptions } from "@/lib/auth-config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const useProtectedRoute = async () => {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/");
	}
};
