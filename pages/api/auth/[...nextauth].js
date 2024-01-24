import NextAuth from 'next-auth'
import FacebookProviders from 'next-auth/providers/facebook'
import GoogleProviders from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    FacebookProviders({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
