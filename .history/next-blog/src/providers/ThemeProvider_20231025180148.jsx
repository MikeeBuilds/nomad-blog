"use client"



import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeProvider = () => {

    const {theme}= useContext(ThemeContext)
  return (
    <div>ThemeProvider</div>
  )
}

export default ThemeProvider