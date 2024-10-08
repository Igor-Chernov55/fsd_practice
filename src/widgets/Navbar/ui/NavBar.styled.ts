import styled from "styled-components";

export const BlockNavbar = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: ${props => props.theme.backgroundColor};
    padding: 10px;
`

export const BlockNavLinks = styled('nav')`
`

export const ListNavLinks = styled('ul')`
    padding: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
`

export const ItemNavLinks = styled('li')`
    
    &:not(:last-child) {
        margin-right: 8px;
    }
`