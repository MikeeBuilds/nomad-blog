import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {

  const status = "notauthenticated"
  return (
    <>
    {status==="notauthenticated" ? (
      <Link import React from 'react'
      import { connect } from 'react-redux'
      import PropTypes from 'prop-types'
      
      export const mapStateToProps = state => ({})
      
      export const mapDispatchToProps = {}
      
      export const first = (WrappedComponent) => {
        const hocComponent = ({ ...props }) => <WrappedComponent {...props} />
      
        hocComponent.propTypes = {}
      
        return hocComponent
      }
      
      export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(first(WrapperComponent))
      ></Link>
    ) : ()}
    </>
  )
}

export default AuthLinks