import {createContext} from "react";
import {Theme} from "../../../App.tsx";

interface ToggleThemeProviderProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ToggleThemeProvider = createContext<ToggleThemeProviderProps>({})