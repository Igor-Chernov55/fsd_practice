import React, {FC} from 'react';
import {NavbarBlock, NavbarLink, NavbarLinksBlock} from "./Navbar.styled";
import {AppLink} from "../../../shared/ui";
import {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "../../ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({className}) => {
    return (
        <NavbarBlock>
            <ThemeSwitcher />
            <NavbarLinksBlock>
                <AppLink as={NavbarLink} theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink as={NavbarLink} theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
            </NavbarLinksBlock>

        </NavbarBlock>
    );
};
