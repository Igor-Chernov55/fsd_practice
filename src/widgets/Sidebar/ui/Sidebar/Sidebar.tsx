import * as React from 'react';
import {FC, useState} from "react";
import {SidebarBlock} from "./Sidebar.styled";
import {Box, Button} from "@mui/material";
import {ThemeSwitcher} from "../../../ThemeSwitcher";

interface SidebarType {

};

export const Sidebar: FC<SidebarType> = ({}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed( prev => !prev);
    return (
        <SidebarBlock $toggleSidebar={collapsed}>
            <Button onClick={onToggle}>toggle</Button>
            <Box>
                <ThemeSwitcher/>
                {/*<LangSwitcher/>*/}
            </Box>

        </SidebarBlock>
    );
};