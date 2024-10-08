import styled from "styled-components";
import {colors, fonts} from "../mixins/mixins.ts";

export const Title = styled.h1`
    color: ${colors.darkGray};
    ${fonts.big};
    margin-bottom: 15px;
    user-select: none;
`
export const SubTitle = styled.h2`
    color: ${props => props.theme.color};
    ${fonts.small};
`
export const MainText = styled.p`
    color: ${colors.darkGray};
    ${fonts.small};
    margin-bottom: 14px;
    
`
export const MainContainer = styled('div')`
    background-color: ${props => props.theme.body};
    padding: 0;
    height: 100vh;
    overflow: hidden;
`
