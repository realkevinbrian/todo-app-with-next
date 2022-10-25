import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.scss'
import Body from './Body'

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner/>
      <Body/>
    </div>
  )
}
