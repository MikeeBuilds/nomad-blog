import { createContext, useState } from "react";




export const ThemeContext = createContext()

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = useState
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}