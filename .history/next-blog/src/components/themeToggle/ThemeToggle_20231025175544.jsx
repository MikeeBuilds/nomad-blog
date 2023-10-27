import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";

const ThemeToggle = () => {

  const {theme} = useContext(the)


  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle