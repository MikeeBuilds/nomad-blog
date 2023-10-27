import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=scouting" className={styles.category}>
          Scouting
        </Link>
        <Link href="/blog?cat=reviews" className={styles.category}>
          Gear Reviews and Tech
        </Link>
        <Link href="/blog?cat=strategies" className={styles.category}>
          Hunting Strategies
        </Link>
        <Link href="/blog?cat=wilderness" className={styles.category}>
          Wilderness Skills
        </Link>
        <Link href="/blog?cat=tales" className={styles.category}>
          Hunter's Tales
        </Link>
        <Link href="/blog?cat=community" className={styles.category}>
          Community Hub
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
