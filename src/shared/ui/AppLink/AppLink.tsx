import * as React from 'react';
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {CustomLink} from "./AppLink.styled";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkType extends LinkProps {
    theme?: AppLinkTheme
    as?: any
};
export const AppLink: FC<AppLinkType> = (props) => {

    const {
        to,
        children,
        as,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <CustomLink
            as={as}
            to={to}
            $themeType={theme}
            {...otherProps}
        >
            {children}
        </CustomLink>
    );
};