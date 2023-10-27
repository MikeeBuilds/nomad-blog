import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to our bowhunting blog!</b> Explore hunting tips, gear
        reviews, and real-life adventures
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
          Learning how to find the deer sign in less time
          </h1>
          <p className={styles.postDesc}>
            Unlock the Secrets of Efficient Deer Sign Detection Join us on a
            journey to master the art of tracking deer sign with precision and
            speed. Our blog, 'Learning how to find the deer sign in less time,'
            is your compass in the wild. Discover expert techniques and proven
            strategies to cut through the hunting terrain efficiently,
            uncovering vital clues that lead to a successful hunt. It's time to
            enhance your hunting game and maximize your time in the great
            outdoors.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
