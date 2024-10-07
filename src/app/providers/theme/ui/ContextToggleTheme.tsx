import {ToggleThemeProvider} from "../lib/ToggleThemeProvider.ts";
import {FC, useState} from "react";
import {Theme} from "../../../App.tsx";

const defaultTheme = localStorage.getItem('theme') || 'light'

export const ContextToggleTheme:FC = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    return (
        <ToggleThemeProvider.Provider value={{theme:theme, setTheme:setTheme}}>
            {children}
        </ToggleThemeProvider.Provider>
    );
};
