"use client"



import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeProvider = () => {

    const {theme} = useContext(ThemeContext)
  return (
    <div className=''>ThemeProvider</div>
  )
}

export default ThemeProvider