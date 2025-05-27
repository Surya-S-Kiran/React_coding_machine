import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

const [theme, setTheme] = useState("light");
const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
}

//useMemo recalculate it only if theme changes
const contextValue = useMemo(() =>({
    theme, toggleTheme
}),[theme]);

return (
    <ThemeContext.Provider value={contextValue} >
        <div className={theme === "light" ? "light-theme" : "dark-theme"}>
            {children}
        </div>
    </ThemeContext.Provider>

  );
};

export const useTheme = () => useContext(ThemeContext);