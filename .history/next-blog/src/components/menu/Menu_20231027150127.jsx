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
            <h3>
            Lorem ipsunm dolor set amet consector
            </h3>
            <div className={styles.detail}>
              <span>john doe</span>
              <span></span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
