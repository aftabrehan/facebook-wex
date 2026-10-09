import NextAuth from 'next-auth'
import FacebookProviders from 'next-auth/providers/facebook'
import GoogleProviders from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: { strategy: 'jwt' },
  providers: [
    ...(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET ? [FacebookProviders({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })] : []),
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET ? [GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })] : []),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        guest: { label: 'Guest', type: 'text' },
      },
      async authorize(credentials) {
        const user = {
          id: 'demo_user_id',
          name: 'John Doe',
          email: 'johndoe@example.com',
          image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=72&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        }

        if (credentials?.guest === 'true')
          return user
        else return null
      },
    }),
  ],
}

export default NextAuth(authOptions)
