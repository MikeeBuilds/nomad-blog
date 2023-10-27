import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {

  const status = "notauthenticated"
  return (
    <>
    {status==="notauthenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <Link href="/write">Write</Link>
    )}
    </>
  )
}

export default AuthLinks