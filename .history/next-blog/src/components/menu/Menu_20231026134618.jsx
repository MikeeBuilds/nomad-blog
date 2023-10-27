import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Hot Articles 🔥"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill sizes="(max-width: 1280px) 100vw, 50vw" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.reviews}`}>
              Reviews
            </span>
            <h3 className={styles.postTitle}>
              Discover expert techniques and proven strategies to cut through
              the hunting terrain efficiently.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.26.03</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
