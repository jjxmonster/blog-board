import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { NavUserProfile } from "@/components/nav-user-profile";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export const NavAuth = () => {
	const { status, data } = useSession();
	const isLoading = status === "loading";

	return isLoading ? (
		<div className="mr-6 flex h-[56px] items-center justify-center">
			<Skeleton className="h-10 w-10 rounded-full" />
		</div>
	) : data?.user ? (
		<NavUserProfile user={data.user} />
	) : (
		<div className="flex items-center gap-5">
			<Link href="/api/auth/signin">
				<Button aria-label="Create Account" className="py-4" variant="default">
					Create Account
				</Button>
			</Link>
			<Link aria-label="Sign in" href="/signin">
				<Button className="py-4" variant="default">
					Login
				</Button>
			</Link>
		</div>
	);
};
