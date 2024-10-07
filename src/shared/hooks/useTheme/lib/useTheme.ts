import {Theme} from "../../../../app/App.tsx";
import {useContext, useState} from "react";
import {ToggleThemeProvider} from "../../../../app/providers/theme/lib/ToggleThemeProvider.ts";

const defaultTheme = localStorage.getItem('theme') || 'light'

export const useTheme = () => {
    const {theme, setTheme} = useContext<Theme>(ToggleThemeProvider);

    const toggleTheme = () => {
        setTheme(prevState => prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT )
        localStorage.setItem('theme', theme);
    }

    return {
        toggleTheme
    }
}