import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <h1>This is the landing page</h1>
    </div>
  )
}