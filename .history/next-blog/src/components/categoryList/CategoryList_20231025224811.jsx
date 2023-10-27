import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=scouting" className={`${styles.category} ${styles.scouting}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Scouting
        </Link>
        <Link href="/blog?cat=reviews" className={`${styles.category} ${styles.reviews}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Gear Reviews and Tech
        </Link>
        <Link href="/blog?cat=strategies" className={`${styles.category} ${styles.strategies}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Hunting Strategies
        </Link>
        <Link href="/blog?cat=wilderness" className={`${styles.category} ${styles.wilderness}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className(styles.image}
          />
          Wilderness Skills
        </Link>
        <Link href="/blog?cat=tales" className={`${styles.category} ${styles.tales}`}>
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Hunter's Tales
        </Link>
        <Link href="/blog?cat=community" className={`${styles.category} ${styles.community}`}>
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Community Hub
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
