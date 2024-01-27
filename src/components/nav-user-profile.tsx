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

const default_image = "https://avatars.githubusercontent.com/u/124599?v=4";

export const NavUserProfile = ({ user }: { user: Omit<User, "id"> }) => {
	const { image, name } = user;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center">
				<Avatar className="my-2">
					<AvatarImage src={image ?? default_image} alt={`${name} Avatar`} />
					<AvatarFallback>{`${name} Avatar`}</AvatarFallback>
				</Avatar>
				<ChevronDown />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>My Posts</DropdownMenuItem>
				<DropdownMenuItem>New Posts</DropdownMenuItem>
				<DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
