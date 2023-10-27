"use client"



import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect } from 'react'

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext);
    const [mount, setMounted] = useState(false)

    useEffect
  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeProvider