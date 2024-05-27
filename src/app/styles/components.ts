import styled from "styled-components";
import {colors, fonts} from "./mixins";
import {Box} from "@mui/material";

export const Title = styled.h1`
    color: ${colors.darkGray};
    ${fonts.big};
    margin-bottom: 30px;
`
export const SubTitle = styled.h2`
    color: ${colors.forestMain};
    ${fonts.middle};
    margin-top: 32px;
    margin-bottom: 8px;
`
export const MainText = styled.p`
    color: ${colors.darkGray};
    ${fonts.small};
    margin-bottom: 14px;
`
export const MainContainer = styled(Box)`
    padding: 65px 69px;
    background-color: ${colors.backgroundMain};
    overflow-y: auto;
    height: 92vh;
`
