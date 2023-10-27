"use client"

import { createContext, useState } from "react";


export const ThemeContext = createContext()

const getFromLocalStorage = ()=> {
    const value = localStorage.getItem("theme")

    return value || "light";
}

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = useState(()=> {
        return getFomLocalStorage()
    });
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}