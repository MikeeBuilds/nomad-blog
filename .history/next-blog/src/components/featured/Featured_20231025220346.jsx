import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to our bowhunting blog and app!</b> your ultimate guides to the wild
        world of bowhunting. Explore hunting tips, gear reviews, and real-life
        adventures. Join our vibrant community of passionate bowhunters, where
        the thrill of the hunt comes alive. Start your journey with us today!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1/>
        </div>
        <div className={styles.textContainer}></div>
      </div>
    </div>
  );
};

export default Featured;
