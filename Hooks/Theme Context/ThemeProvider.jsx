import  {useState} from "react"
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
const [theme,setTheme] = useState("light");

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    );
};

export { ThemeProvider };