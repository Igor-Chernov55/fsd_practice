import {ToggleThemeProvider} from "../lib/ToggleThemeProvider";
import {ReactNode, useEffect, useState} from "react";
import {Theme} from "../../../App";


export const ContextToggleTheme= ({children}: {children: ReactNode}) => {

    const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme)

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', Theme.DARK)
        }
        else {
            localStorage.setItem('theme', Theme.LIGHT)
        }
    },[])
    return (
        <ToggleThemeProvider.Provider value={{theme: theme, setTheme: setTheme}}>
            {children}
        </ToggleThemeProvider.Provider>
    );
};
