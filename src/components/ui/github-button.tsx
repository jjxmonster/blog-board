"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { signIn, useSession } from "next-auth/react";

export const GithubButton = () => {
	const session = useSession();

	console.log(session);
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
