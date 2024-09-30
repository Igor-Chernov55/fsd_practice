import {ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext.ts";
import {Theme} from "../../App.tsx";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider = (children: ReactNode) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme( theme === Theme.DARK ? Theme.DARK : Theme.DARK );
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: toggleTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

