import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
imp


export default function Home() {
  return (
    <div className="container">
      <Featured/>
      <CategoryList/>
    </div>
  );
}
