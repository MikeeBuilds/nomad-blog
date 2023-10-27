"use client"

import { createContext, useState } from "react";


export const ThemeContext = createContext()

const getFromLocalStorage = ()=> {

    if
    const value = localStorage.getItem("theme")

    return value || "light";
}

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = useState(()=> {
        return getFromLocalStorage()
    });
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}