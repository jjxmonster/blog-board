import type { Database } from "./database.types";

export interface ProfilesRelation {
	profiles: User | null;
}
export interface CategoryRelation {
	categories: Database["public"]["Tables"]["categories"]["Row"];
}
export interface PostRelation {
	posts: Post<ProfilesRelation>[];
}
export interface ExtendedPostRelation {
	posts: Post<null>[];
}

export type User = Database["public"]["Tables"]["profiles"]["Row"];
export type Post<T> = Database["public"]["Tables"]["posts"]["Row"] & T;
export type Category<T> = Database["public"]["Tables"]["categories"]["Row"] & T;
export type Comment<T> = Database["public"]["Tables"]["comments"]["Row"] & T;
