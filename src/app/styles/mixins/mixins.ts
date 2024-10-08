import {css} from "styled-components";

export const colors = {
    backgroundMain: '#F9FBFD',
    black: '#000000',
    white: '#ffffff',
    gray: '#7E7E7E',
    lightGrey: '#F1F0F0',
    darkGray: '#333333'
}

export const fonts = {
    big: () => css`
        font-size: 32px;
        font-weight: 700;
    `,
    middle: () => css`
        font-weight: 400;
        font-size: 24px;
        
    `,
    small: () => css`
        font-weight: 400;
        font-size: 18px;
    `
}

export const borderRadius = {
    external: () => css`
        border-radius: 14px;
    `,
    inside: () => css`
        border-radius: 8px;
    `
}
