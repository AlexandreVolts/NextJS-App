import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
        verificationCode: { label: 'verificationCode', type: 'text' }
      },
      authorize: async (credentials) => {
        // here we can return a user
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});