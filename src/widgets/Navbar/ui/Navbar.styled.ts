import styled from "styled-components";
import {Box} from "@mui/material";
import {ThemeDark} from "../../../app/styles/theme/themes/dark";
import {Link} from "react-router-dom";
import {colors} from "../../../app/styles/mixins";

export const NavbarBlock = styled(Box)`
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 50px;
    background: ${ThemeDark.invert_bg_color}
`

export const NavbarLinksBlock = styled('nav')`
    margin-left: auto;
`

export const NavbarLink = styled(Link)`
    color: ${colors.white};
    margin-left: 15px;
`