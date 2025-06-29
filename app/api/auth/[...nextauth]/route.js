import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/app/models/User'
import Payment from '@/app/models/Payment'
import connectDB from '@/app/db/connectdb'


export const providerss = NextAuth({
  providers: [
    // OAuth authentication providers..
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github" || account.provider == "google") {
        //Connecting to DB
        try {

          await connectDB()
        }
        catch (err) {
          console.error("DB connection failed:", err)
          return false
        }
        console.log(user)
        console.log(account)
        console.log(email)
        const currentUser = await User.findOne({ email: user.email })

        if (!currentUser) {
          //create a new user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0]
          })
        }

        return true
      }


    }
    , async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      const dbUser = await User.findOne({ email: session.user.email })

      session.user.name = dbUser.username

      return session
    }
  }
})
export { providerss as GET, providerss as POST };
