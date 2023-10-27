import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href="/blog?cat=">
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            Scouting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
