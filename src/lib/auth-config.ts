import { SupabaseAdapter } from "@auth/supabase-adapter";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken";
import { type Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
	adapter: SupabaseAdapter({
		url: process.env.SUPABASE_URL as string,
		secret: process.env.SUPABASE_SERVICE as string,
	}) as Adapter,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	pages: {
		signIn: "/",
	},
	callbacks: {
		async session({ session, user }) {
			const signingSecret = process.env.SUPABASE_JWT_SECRET;
			if (signingSecret) {
				const payload = {
					aud: "authenticated",
					exp: Math.floor(new Date(session.expires).getTime() / 1000),
					sub: user.id,
					email: user.email,
					role: "authenticated",
				};
				session.user.id = user.id;
				session.supabaseAccessToken = jwt.sign(payload, signingSecret);
			}
			return session;
		},
	},
};
