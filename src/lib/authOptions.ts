import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongoClient"
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      // profile(profile) {
        // return {
          // id: ''
          // Return all the profile information you need.
          // The only truly required field is `id`
          // to be able identify the account when added to a database
        // }
      // },
    })
  ],
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise),

}