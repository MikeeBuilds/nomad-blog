import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to our bowhunting blog and app!</b> <br/> <br/>Explore hunting tips, gear reviews, and
        real-life adventures. Join our vibrant community of passionate
        bowhunters, where the thrill of the hunt comes alive. Start your journey
        with us today!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="fill" width={320} height={320} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Learning how to find the deer sign in less time.</h1>
          <p className={styles.postDesc}>
            Explore expert techniques to swiftly uncover crucial deer sign. Our
            blog, 'Learning how to find the deer sign in less time,' is your
            essential hunting tool. Enhance your hunting game and maximize your
            time in the great outdoors.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
