"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { signIn } from "next-auth/react";

export const GithubButton = () => {
	return (
		<Button
			className="text-medium w-full gap-2 py-8"
			variant="outline"
			onClick={() => signIn("github")}
		>
			<GitHubLogoIcon width={25} height={25} />
			Continue with Github
		</Button>
	);
};
