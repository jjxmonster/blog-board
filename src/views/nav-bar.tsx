"use client";
import { NotepadText } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { NavAuth } from "@/components/nav-auth";

export const Navbar = () => {
	return (
		<div>
			<div className="mx-auto flex max-w-5xl justify-between px-6 py-10 md:px-0">
				<div className="flex items-center">
					<Link href="/" passHref>
						<NotepadText size={40} />
					</Link>
				</div>
				<NavigationMenu className="flex gap-5">
					<NavigationMenuList>
						<Link href="/categories" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Categories
							</NavigationMenuLink>
						</Link>
					</NavigationMenuList>
				</NavigationMenu>
				<NavAuth />
			</div>
		</div>
	);
};
