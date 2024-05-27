import styled from "styled-components";
import {Box, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const ButtonLogin = styled('button')<{$isAuthLogin?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 220px;
    border-radius: 4px;
    margin-left: 20px;
    margin-right: 20px;
    text-transform: none;
    padding: 10px;
    cursor: pointer;
    font-size: 12px;
    background-color: #1e324f;
    color: #fff;
    position: relative;
    border: none;
    ${props => props?.$isAuthLogin && 'color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); border: 1px solid rgba(0, 0, 0, 0.25);'}
    
    &:hover {
       transition: .3s;
      ${props => props?.$isAuthLogin ? 'background-color: rgba(0, 0, 0, 0.04);' : 'background-color: #1677ff;'}  
    }
`

export const BlockImage = styled(Box)`
    width: 50%;
    padding: 205px 15px 0 85px;
    border-radius: 30px;
    overflow: hidden;
    background-color: #00a3e9;
    position: relative;
`

export const TextImage = styled(Typography)`
    font-feature-settings: "cv04" on, "cv03" on, "cv01" on;
    color: #fff;
    font-family: 'Circe', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.72px;
    line-height: 110%;
`

export const LoginContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    height: 100vh;
    min-width: 720px;
    overflow: hidden;
`

export const ProgressRound = styled(CircularProgress)`
    position: absolute;
    left: 30%;
    margin-right: 10px;
`

export const LoginContainerForm = styled(Box)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CheckAuthBlock = styled(Box)`
    display: flex;
    flex-direction: column;
     align-items: center;
`
export const CheckAuthContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

