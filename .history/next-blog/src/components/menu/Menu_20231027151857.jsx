import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className="">{"Whats HOT!"}</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.reviews}`}>
              Reviews
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsunm dolor set amet consector
            </h3>
            <div className={styles.detail}>
              <span className={styles.usename}>john doe</span>
              <span className={styles.date}> - 10.27.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.tales}`}>
            Tales
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsunm dolor set amet consector
            </h3>
            <div className={styles.detail}>
              <span className={styles.usename}>john doe</span>
              <span className={styles.date}> - 10.27.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.wilderness}`}>
              Wilderness
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsunm dolor set amet consector
            </h3>
            <div className={styles.detail}>
              <span className={styles.usename}>john doe</span>
              <span className={styles.date}> - 10.27.23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.community}`}>
            Community
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsunm dolor set amet consector
            </h3>
            <div className={styles.detail}>
              <span className={styles.usename}>john doe</span>
              <span className={styles.date}> - 10.27.23</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
