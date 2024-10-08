import {useContext} from "react";
import {
    ToggleThemeProvider,
} from "../../../../app/providers/theme/lib/ToggleThemeProvider.ts";
import {Theme} from "../../../../app/App.tsx";


export const useTheme = () => {
    const {theme, setTheme} = useContext(ToggleThemeProvider);

    const toggleTheme = () => {
        setTheme((prevState) =>  prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        localStorage.setItem('theme', theme as Theme);
    }

    return {
        theme,
        toggleTheme
    }
}