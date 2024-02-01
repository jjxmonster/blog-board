import type { Database } from "./database.types";

interface PostRelation {
	profiles: User | null;
}
interface CategoryRelation {
	categories: Category;
}

export type User = Database["public"]["Tables"]["profiles"]["Row"];
export type Post = Database["public"]["Tables"]["posts"]["Row"] &
	PostRelation &
	CategoryRelation;
export type Category = Database["public"]["Tables"]["categories"]["Row"];
