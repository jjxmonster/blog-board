import { Button } from "@/components/ui/button";
import { GithubButton } from "@/components/ui/github-button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function SignIn() {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect("/");
	}

	return (
		<section className="flex min-h-full pt-16 sm:py-28">
			<div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
				<div className="relative mt-12 sm:mt-16">
					<h1 className="text-center text-2xl font-medium tracking-tight text-slate-200">
						Sign in to your account
					</h1>
				</div>
				<div className="sm:rounded-5xl -mx-4 mt-8 flex-auto px-4 py-8 shadow-2xl shadow-slate-900 sm:mx-0 sm:flex-none sm:p-24">
					<GithubButton />
				</div>
			</div>
		</section>
	);
}
