import {createContext} from "react";
import {Theme} from "../../../App.tsx";

export interface ToggleThemeProviderProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ToggleThemeProvider = createContext<ToggleThemeProviderProps>({})