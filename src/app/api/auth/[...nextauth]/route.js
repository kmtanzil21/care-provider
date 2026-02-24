import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {

  providers: [

    CredentialsProvider({

      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {

        const collection = await dbConnect("users");

        const user = await collection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };

      },

    }),

  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {

    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;
      }

      return token;

    },

    async session({ session, token }) {

      session.user.id = token.id;

      return session;

    },

  },

  secret: process.env.NEXTAUTH_SECRET,

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };