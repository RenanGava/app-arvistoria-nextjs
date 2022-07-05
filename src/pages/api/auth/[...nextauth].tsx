import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

// Fauna
import { query as q, } from 'faunadb'
import { fauna } from '../../../services/fauna';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: '676776250795-deik9r2cvujh6j32na55flj01rb1uqf3.apps.googleusercontent.com',
            clientSecret: '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',
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })],
    callbacks: {
        async signIn({ account, profile, user }) {

            const { email } = user

            console.log(user);


            try {
                await fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(
                                    q.Index('user_by_email'),
                                    q.Casefold(email)
                                )
                            )
                        ),
                        q.Create(
                            q.Collection('users'),
                            { data: { email } }
                        ),
                        q.Get(
                            q.Match(
                                q.Index('user_by_email'),
                                q.Casefold(email)
                            )
                        )
                    )
                )

                return true
            } catch (error) {
                console.log(error);
                return false
            }
        },
    },
})