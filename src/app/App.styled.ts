import styled from "styled-components";
import {Box} from "@mui/material";
import {fonts} from "./styles/mixins";
import {ThemeDark} from "./styles/theme/themes/dark";
import {ThemeLight} from "./styles/theme/themes/light";
import {Theme} from "./App";

export const AppBlock = styled(Box)<{ $theme: Theme }>`
    min-height: 100vh; 
    ${props => props.$theme === Theme.DARK ? `${ThemeDark};` : `${ThemeLight}`}
`