import type { Database } from "./database.types";

interface ProfilesRelation {
	profiles: User | null;
}
interface CategoryRelation {
	categories: Database["public"]["Tables"]["categories"]["Row"];
}
interface PostRelation {
	posts: { id: number }[];
}
interface ExtendedPostRelation {
	posts: Post[];
}

export type User = Database["public"]["Tables"]["profiles"]["Row"];
export type Post = Database["public"]["Tables"]["posts"]["Row"] &
	ProfilesRelation &
	CategoryRelation;
export type Category = Database["public"]["Tables"]["categories"]["Row"] &
	PostRelation;
export type ExtendedCategory =
	Database["public"]["Tables"]["categories"]["Row"] & ExtendedPostRelation;
