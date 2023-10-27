import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2>{"Hot Articles 🔥"}</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.category}`}>
              Reviews
            </span>
            <h3>
              {" "}
              Discover expert techniques and proven strategies to cut through
              the hunting terrain efficiently.
            </h3>
            <div className={styles.detail}>
              <span className={styles.detail}>John Doe</span>
              <span className={styles.detail}>10.26.03</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
