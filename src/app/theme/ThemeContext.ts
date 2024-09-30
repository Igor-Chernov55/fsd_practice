import {createContext} from "react";
import {Theme} from "../../App.tsx";

export interface ThemeContext {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Partial<ThemeContext>>({})

export const LOCAL_STORAGE_THEME_KEY = "theme";