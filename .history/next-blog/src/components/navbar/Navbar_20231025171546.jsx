import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
        <Image src="facebook.png" alt='facebook' width={24} height={24}/>
        <Link></Link>
      </div>
    </div>
  )
}

export default Navbar