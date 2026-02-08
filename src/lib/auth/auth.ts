import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ROLES } from "./auth.config";

/**
 * Dummy users for CredentialsProvider example.
 * Replace this with a real user store (DB) in production.
 */
const users = [
  { id: "1", name: "Admin User", email: "admin@local", password: "password", role: ROLES.ADMIN },
  { id: "2", name: "Seller User", email: "seller@local", password: "password", role: ROLES.SELLER },
  { id: "3", name: "Buyer User", email: "buyer@local", password: "password", role: ROLES.BUYER },
];

interface AppUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<AppUser | null> {
        if (!credentials) return null;
        const email = String((credentials as Record<string, unknown>).email ?? "");
        const password = String((credentials as Record<string, unknown>).password ?? "");
        const user = users.find((u) => u.email === email && u.password === password);
        if (!user) return null;
        return { id: user.id, name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT & { role?: string }; user?: AppUser | undefined }) {
      // On sign in, attach role from the user to token
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT & { role?: string } }) {
      // Expose role on the session's user object
      if (session.user) {
        (session.user as unknown as { role?: string }).role = token.role ?? ROLES.GUEST;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

export default authOptions;
