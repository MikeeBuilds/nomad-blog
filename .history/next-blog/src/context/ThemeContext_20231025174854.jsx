import { createContext, useState } from "react";




export const ThemeContext = createContext()

const getFormLocalStorage = ()=> {
    const value = localStorage.getItem("theme")

    return value ||
}

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = useState("light");
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}