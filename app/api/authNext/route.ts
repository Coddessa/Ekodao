import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { IVKProfileResponse } from '@/types/authPopup'

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    {
      id: 'vk',
      name: 'VK',
      type: 'oauth',
      version: '2.0',
      clientId: process.env.VK_CLIENT_ID!,
      clientSecret: process.env.VK_CLIENT_SECRET!,
      authorization: {
        url: 'https://oauth.vk.com/authorize',
        params: { scope: 'email' },
      },
      token: 'https://oauth.vk.com/access_token',
      userinfo: 'https://api.vk.com/method/users.get?fields=photo_100',
      profile: (profile: IVKProfileResponse) => ({
        id: profile.response[0].id.toString(),
        name: `${profile.response[0].first_name} ${profile.response[0].last_name}`,
        email: profile.response[0].email,
        image: profile.response[0].photo_100,
      }),
    },
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
})

// Именованные экспорты для Next 14
export const GET = authHandler
export const POST = authHandler
