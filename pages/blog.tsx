import { GetServerSidePropsContext } from 'next'
import { getSession, useSession } from 'next-auth/client'

interface Props {
    data?: string
}
function Blog({ data }: Props) {
    const [session] = useSession();

    console.log(session)
    return <h1>Blog page - {data} </h1>
}

export default Blog


export async function getServerSideProps(context: GetServerSidePropsContext) {

    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {

                destination: `/api/auth/signin?callbackUrl=http://localhost:300/blog`,
                permanent: false,

            }

        }
    }
    return {
        props: {
            session,
            data: session ? 'List of 100 personalized blogs' : 'List of free blogs'
        }
    }

}