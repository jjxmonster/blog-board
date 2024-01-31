"use client";
import { GithubButton } from "@/components/ui/github-button";
import { useSearchParams } from "next/navigation";

import { toast } from "sonner";
import { useEffect } from "react";

export default function SignIn() {
	const { get } = useSearchParams();

	useEffect(() => {
		if (get("error"))
			toast.error("An error occurred while trying to sign in.", {
				id: "signin-error",
			});
	}, []);

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
