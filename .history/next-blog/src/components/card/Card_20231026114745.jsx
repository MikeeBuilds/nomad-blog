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
                <span className={styles.category}>10.26.23</span>
                <span className={styles.category}>SCOUTING</span>
            </div>
          </div>
    </div>
  )
}

export default Card