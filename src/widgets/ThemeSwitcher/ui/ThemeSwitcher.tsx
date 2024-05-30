import * as React from 'react';
import {FC} from 'react';
import {useTheme} from "../../../app/providers/themeProvider";
import {ButtonSwitcher} from "./ThemeSwitcher.styled";
import LightThemeIcon from '../../../shared/assets/icons/theme-light.svg'
import DarkThemeIcon from '../../../shared/assets/icons/theme-dark.svg'
import {Theme} from "../../../app/App";

interface ThemeSwitcherType {
};

export const ThemeSwitcher: FC<ThemeSwitcherType> = ({}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <ButtonSwitcher variant={'outlined'} onClick={toggleTheme}>
            {theme === Theme.DARK ?<DarkThemeIcon /> : <LightThemeIcon />}
        </ButtonSwitcher>
    );
};