import styled from "styled-components";
import {Box} from "@mui/material";
import {fonts} from "./styles/mixins";
import {ThemeDark} from "./styles/theme/themes/dark";
import {ThemeLight} from "./styles/theme/themes/light";
import {Theme} from "./App";
import {Themes} from "./styles/theme/themes/themes";

export const AppBlock = styled(Box)<{ $theme: Theme }>`
    min-height: 100vh; 
    ${props => props.$theme === Theme.DARK ? `${Themes.dark};` : `${Themes.light};`}
`
export const ContentPage = styled(Box)`
    display: flex;
`
export const PageWrapper = styled(Box)`
    flex-grow: 1;
    padding: 20px;
`