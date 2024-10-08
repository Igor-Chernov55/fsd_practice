import {ToggleThemeProvider} from "../lib/ToggleThemeProvider.ts";
import {ReactNode, useState} from "react";
import {Theme} from "../../../App.tsx";

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT

export const ContextToggleTheme= ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    return (
        <ToggleThemeProvider.Provider value={{theme: theme, setTheme: setTheme}}>
            {children}
        </ToggleThemeProvider.Provider>
    );
};
