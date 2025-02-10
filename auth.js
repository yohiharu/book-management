import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

export const config = {
    providers: [Github({
        clientID: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET
    })],
    basePath: "/api/auth"
}

export const {handlers, auth, signIn, signOut} = NextAuth(config)