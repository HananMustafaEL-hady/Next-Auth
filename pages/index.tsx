import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'
const Home: NextPage = () => {
  const [session, loading] = useSession()
  return (
    <div className={styles.main}>
      <h2 className={styles.title}> {session ? session.user?.name : " "}Welcom to our blog </h2>
    </div>
  )
}

export default Home
