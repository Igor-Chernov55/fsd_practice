import styled from "styled-components";
import {colors, fonts} from "../mixins/mixins.ts";

export const Title = styled.h1`
    color: ${colors.darkGray};
    ${fonts.big};
    margin-bottom: 15px;
    user-select: none;
`
export const SubTitle = styled.h2`
    color: ${colors.gray};
    ${fonts.middle};
    margin-top: 32px;
    margin-bottom: 8px;
`
export const MainText = styled.p`
    color: ${colors.darkGray};
    ${fonts.small};
    margin-bottom: 14px;
`
export const MainContainer = styled('div')`
    padding: 107px 35px 10px 35px;
    background-color: ${props => props.theme.body};
    overflow-y: auto;
    height: 100vh;
`
