import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10.26.23</span>
          <span className={styles.category}>SCOUTING</span>
        </div>
        <h1 className={styles.title}>sekfjbnwefk.wjnfbkgfn</h1>
        <p>
          In these pages, you'll discover a treasure trove of insights,
          knowledge, and stories from the field. From expert hunting tips and
          in-depth gear reviews to gripping real-life hunting adventures, our
          platform is a place where the bowhunting community thrives. It's not
          just about content; it's about sharing a way of life
        </p>
        <Link href="/"></Link>
      </div>
    </div>
  );
};

export default Card;
