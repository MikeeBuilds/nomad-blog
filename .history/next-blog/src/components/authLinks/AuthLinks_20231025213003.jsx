"use client"


import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  const status = "notauthenticated"
  return (
    <>
    {status==="notauthenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}>Logout</span>
      </>
    )}
    </>
  )
}

export default AuthLinks