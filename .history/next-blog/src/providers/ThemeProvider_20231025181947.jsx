"use client"



import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext);
    const [mount, setMounted] = useState(false)

    use
  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeProvider