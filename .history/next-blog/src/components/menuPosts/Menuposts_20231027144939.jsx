import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage &&<div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 50vw"
            className={styles.image}
          />}
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.reviews}`}>
            Reviews
          </span>
          <h3 className={styles.postTitle}>
            Discover expert techniques and proven strategies to cut through the
            hunting terrain efficiently.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.26.03</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.strategies}`}>
            Hunting Strategy
          </span>
          <h3 className={styles.postTitle}>
            Discover expert techniques and proven strategies to cut through the
            hunting terrain efficiently.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.26.03</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.community}`}>
            community Hub
          </span>
          <h3 className={styles.postTitle}>
            Discover expert techniques and proven strategies to cut through the
            hunting terrain efficiently.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.26.03</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.scouting}`}>
            Scouting
          </span>
          <h3 className={styles.postTitle}>
            Discover expert techniques and proven strategies to cut through the
            hunting terrain efficiently.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.26.03</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
