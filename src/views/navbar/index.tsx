"use client";
import { NotepadText } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
	return (
		<div>
			<div className="mx-auto flex max-w-5xl justify-between py-10">
				<div className="flex items-center">
					<NotepadText size={40} />
				</div>
				<NavigationMenu className="flex gap-5">
					<NavigationMenuList>
						<Link href="/browse" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Browse
							</NavigationMenuLink>
						</Link>
					</NavigationMenuList>
					<NavigationMenuList>
						<Link href="/categories" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Categories
							</NavigationMenuLink>
						</Link>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex items-center gap-5">
					<Link href="/api/auth/signin">
						<Button
							aria-label="Create Account"
							className="py-4"
							variant="default"
						>
							Create Account
						</Button>
					</Link>
					<Link aria-label="Sign in" href="/api/auth/signin">
						<Button className="py-4" variant="default">
							Login
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
