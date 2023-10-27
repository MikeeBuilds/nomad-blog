import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {

  const status = "notauthenticated"
  return (
    <>
    {status==="notauthenticated" ? (
      <Link></Link>
    ) : ()}
    </>
  )
}

export default AuthLinks