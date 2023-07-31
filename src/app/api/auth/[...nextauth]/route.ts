import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "@/app/libs/auth/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
