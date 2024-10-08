import styled from "styled-components";

export const BlockSidebar = styled.div<{$active?: boolean}>`
    width: ${props => props.$active ? '160px': '40px'};
    //height: calc(100vh - 40px);
    background-color: ${props => props.theme.backgroundColor};
    padding: 10px;
    position: relative;
    
    transition: width 0.3s;
`;


