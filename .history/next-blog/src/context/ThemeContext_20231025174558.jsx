import { createContext } from "react";




export const ThemeContext = createContext()

export const ThemeContextprovider = ({children})=> {
    const [theme, setTheme] = 
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}