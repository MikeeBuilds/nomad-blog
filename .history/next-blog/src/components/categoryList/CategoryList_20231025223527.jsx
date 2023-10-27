import React from 'react'
import styles from './categoryList.module.css'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}></div>
      </div>
    </div>
  )
}

export default CategoryList