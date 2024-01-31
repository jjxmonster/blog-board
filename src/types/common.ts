import type { Database } from "./database.types";

interface PostRelation {
	profiles: User | null;
}

export type User = Database["public"]["Tables"]["profiles"]["Row"];
export type Post = Database["public"]["Tables"]["posts"]["Row"] & PostRelation;
