import { createContext } from "react";




export const ThemeContext = createContext()

export const ThemeContextprovider = ({children})=> {
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}