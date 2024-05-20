import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Github({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
	},
	debug: process.env.NODE_ENV === "development",
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn() {
			return true;
		},
		async redirect() {
			return "/";
		},
	},
};
