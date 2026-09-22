import {useContext,useState} from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider =({children})=>{
    //sate of the provider and action as well 
const [theme,setTheme]=useState("light");


    return (
     <ThemeContext value={{theme,setTheme}}>
        {children}
     </ThemeContext>
    )
}

export default ThemeProvider;