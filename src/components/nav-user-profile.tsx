import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type User } from "next-auth";
import { ChevronDown } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

const default_image = "https://avatars.githubusercontent.com/u/124599?v=4";

export const NavUserProfile = ({ user }: { user: Omit<User, "id"> }) => {
	const { image, name } = user;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2">
				<Avatar className="my-2">
					<AvatarImage src={image ?? default_image} alt={`${name} Avatar`} />
					<AvatarFallback>{`${name} Avatar`}</AvatarFallback>
				</Avatar>
				<ChevronDown size={15} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>My Posts</DropdownMenuItem>
				<Link className="w-full" href="/create-post">
					<DropdownMenuItem className="cursor-pointer">
						Create Post
					</DropdownMenuItem>
				</Link>
				<Link className="w-full" href="/create-category">
					<DropdownMenuItem className="cursor-pointer">
						Create Category
					</DropdownMenuItem>
				</Link>
				<DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
