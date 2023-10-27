import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Category


export default function Home() {
  return (
    <div className="container">
      <Featured/>
      <CategoryList/>
    </div>
  );
}
