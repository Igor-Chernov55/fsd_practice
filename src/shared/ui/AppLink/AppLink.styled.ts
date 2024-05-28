import styled from "styled-components";
import {Link} from "react-router-dom";
import {AppLinkTheme} from "./AppLink";
import {colors} from "../../../app/styles/mixins";

export const CustomLink = styled(Link)<{$themeType?: AppLinkTheme}>`
    ${props => props.$themeType === 'primary' && `background-color: ${colors.white};`}
    ${props => props.$themeType === 'secondary' && `background-color: ${colors.darkGray};`}
`