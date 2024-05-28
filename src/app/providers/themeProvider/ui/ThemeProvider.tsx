import React, {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from '../lib/ThemeContext';
import {Theme} from "../../../App";
import {JSX} from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;

export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
export const ThemeProvider = (children:  ReactNode | any) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

     return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

