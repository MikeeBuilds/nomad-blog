import styles from "./card.module.css";


const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill />
          </div>
          <div className={styles.textContainer}></div>
    </div>
  )
}

export default Card