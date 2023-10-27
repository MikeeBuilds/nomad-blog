"use client";

import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextprovider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });


  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(()=> {
    localStorage.setItem("theme", theme);
  }, [theme])
  return ( 
    <ThemeContext.Provider value={{ theme, toggle }}>
        {children}
    </ThemeContext.Provider>
  );
};
