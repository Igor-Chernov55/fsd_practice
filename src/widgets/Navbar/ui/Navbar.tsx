import React, {FC} from 'react';
import {NavbarBlock, NavbarLink, NavbarLinksBlock} from "./Navbar.styled";
import {AppLink} from "../../../shared/ui";
import {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "../../ThemeSwitcher";
import {LangSwitcher} from "../../LangSwitcher/ui/LangSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({className}) => {
    return (
        <NavbarBlock>
            <ThemeSwitcher />
            <LangSwitcher />
            <NavbarLinksBlock>
                <AppLink as={NavbarLink} theme={AppLinkTheme.SECONDARY} to={'/main'}>Главная</AppLink>
                <AppLink as={NavbarLink} theme={AppLinkTheme.PRIMARY} to={'/about_page'}>О сайте</AppLink>
            </NavbarLinksBlock>

        </NavbarBlock>
    );
};
