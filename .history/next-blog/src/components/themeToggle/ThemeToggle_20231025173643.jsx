import Image from "next/image";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="" width={14}/>
    </div>
  )
}

export default ThemeToggle