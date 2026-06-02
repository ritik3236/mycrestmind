import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Enforce strict password as requested
        if (credentials?.email && credentials?.password === 'Welcome@2026') {
          return { 
            id: "1", 
            name: "Enterprise Admin", 
            email: credentials.email 
          };
        }
        // Return null if password does not match 'Welcome@2026'
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user && token.sub) {
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  // Use environment variable for Vercel production, fallback to dev secret locally
  secret: process.env.NEXTAUTH_SECRET || "mycrestmind-development-secret-key-12345", 
});

export { handler as GET, handler as POST };
