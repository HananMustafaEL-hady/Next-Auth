import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/client"
import styles from '../styles/Navbar.module.css'
function Navbar() {

    const [session, loading] = useSession();
    console.log(session)
    return (
        <nav className={`${styles.header}`}>
            <h1 className={`${styles.logo}`}>
                <a href='#'>NextAuth</a>
            </h1>
            <ul className={`${styles.main__nav} ${!session && loading ? `loading` : `loaded`} `}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                {session && (<li>
                    <Link href='/dashboard'>
                        <a>Dashboard</a>
                    </Link>
                </li>)}

                <li>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </li>

                {!loading && !session && (
                    <li>
                        <Link href='/api/auth/signin'>
                            <a
                                onClick={e => {
                                    e.preventDefault()
                                    signIn('github')
                                }}
                            >
                                Sign In
                            </a>
                        </Link>
                    </li>
                )}

                {session && (

                    <li>
                        <Link href='/api/auth/signout'>
                            <a
                                onClick={e => {
                                    e.preventDefault()
                                    signOut()
                                }}
                            >
                                Sign Out
                            </a>
                        </Link>
                    </li>

                )}

            </ul>
        </nav>
    )
}

export default Navbar