import {Box} from "@mui/material";
import styled from "styled-components";
import {sizes} from "../../../../app/styles/mixins";
import {ThemeDark} from "../../../../app/styles/theme/themes/dark";

export const SidebarBlock = styled(Box)<{$toggleSidebar: boolean}>`
    position: relative;
    height: calc(100vh - ${sizes.navbar_high});
    width: ${props => props?.$toggleSidebar ? `${sizes.sidebar_width}`: `${sizes.sidebar_width_collapsed}`};
    background: ${ThemeDark.invert_bg_color};
    transition: width .3;
`
export const Switchers = styled(Box)`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
`