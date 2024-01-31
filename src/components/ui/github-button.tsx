"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { signIn } from "next-auth/react";

export const GithubButton = () => {
	return (
		<Button
			variant="default"
			className="flex items-center gap-2"
			onClick={() =>
				signIn("github", {
					callbackUrl: "/",
				})
			}
		>
			<GitHubLogoIcon width={15} height={15} />
			Sign In with Github
		</Button>
	);
};
