import { createContext, useState } from "react";




export const ThemeContext = createContext()

const getFormStorage = ()=> {
    const value = localStorage.get
}

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = useState("light");
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}