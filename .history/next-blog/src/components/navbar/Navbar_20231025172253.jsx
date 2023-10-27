import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
        <Image src="/instagram.png" alt='facebook' width={24} height={24}/>
        <Image src="/tiktok.png" alt='facebook' width={24} height={24}/>
        <Image src="/youtube.png" alt='facebook' width={24} height={24}/>
      </div>
      <div className={styles.logo}>PublicLandNomad</div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar