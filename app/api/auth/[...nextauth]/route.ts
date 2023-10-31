import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks:{
    async jwt({ token, user }){
        if(user?.id){
            token.id = user.id
        }
        return token
    },

    async session({session, token}){
      let sessionWithId = session as any;
        if(sessionWithId.user){
            sessionWithId.user.id = token.id
        }
        return session
      },
  },
 
  secret: process.env.NEXTAUTH_SECRET as string,
  debug: true,
})

export { handler as GET, handler as POST};