import Head from 'next/head'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <Head>
        <title>Next.js x microCMS - Tutorial</title>
      </Head>
      <header className={styles.header}>
        <p>header components.</p>
      </header>
    </>
  )
}
