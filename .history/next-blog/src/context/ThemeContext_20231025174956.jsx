"use client"

import { createContext, useState } from "react";


export const ThemeContext = createContext()

const getFormLocalStorage = ()=> {
    const value = localStorage.getItem("theme")

    return value || "light";
}

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = useState(()=> {
        return 
    });
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}