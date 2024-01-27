"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { signIn } from "next-auth/react";

export const GithubButton = () => {
	return (
		<Button
			className="w-full gap-2"
			variant="outline"
			onClick={() => signIn("github")}
		>
			<GitHubLogoIcon />
			Continue with Github
		</Button>
	);
};
