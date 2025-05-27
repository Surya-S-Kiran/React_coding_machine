import { useTheme } from "./ThemeContext";
const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    )
}
export default ThemeToggle;