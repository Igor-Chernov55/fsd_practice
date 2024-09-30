import {Theme} from "../../../App.tsx";
import {useState} from "react";

const defaultTheme = localStorage.getItem('theme') as Theme.LIGHT

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme(prevState => prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT )
        localStorage.setItem('theme', theme);
    }

    return {
        toggleTheme
    }
}