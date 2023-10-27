import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div></div>
        </div>
      </div>
      <Pagination/>
      CardList
    </div>
  )
}

export default CardList