import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Welcome from './welcome/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome></Welcome>
    </main>
  )
}