import Image from "next/image";
import styles from "./card.module.css";


const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span>10.26.23</span>
                <span>10.26.23</span>
            </div>
          </div>
    </div>
  )
}

export default Card