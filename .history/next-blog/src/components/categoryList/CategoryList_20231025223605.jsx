import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href='/'/>
        </div>
      </div>
    </div>
  )
}

export default CategoryList