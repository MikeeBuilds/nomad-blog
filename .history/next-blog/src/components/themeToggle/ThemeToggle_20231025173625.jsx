import Image from "next/image";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt=""/>
    </div>
  )
}

export default ThemeToggle