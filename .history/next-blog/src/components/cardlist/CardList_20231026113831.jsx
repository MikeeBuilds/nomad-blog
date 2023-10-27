import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1>Recent posts</h1>
      <Pagination/>
      CardList
    </div>
  )
}

export default CardList