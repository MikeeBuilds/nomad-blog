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
          <div></div>
        </Link>
      </div>
    </div>
  )
}