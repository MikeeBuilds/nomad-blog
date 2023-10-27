import { createContext } from "react";




export const ThemeContext = createContext()

export const ThemeContextprovider = ({children})=> {
    const th
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}