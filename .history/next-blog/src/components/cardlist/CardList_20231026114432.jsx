import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>

      </div>
      <Pagination/>
      CardList
    </div>
  )
}

export default CardList