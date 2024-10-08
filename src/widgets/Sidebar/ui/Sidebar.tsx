import {useState} from "react";
import {BlockSidebar} from "./SideBar.styled.ts";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsed = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <BlockSidebar $active={collapsed}>
            <button onClick={handleCollapsed}>
                toggle
            </button>
        </BlockSidebar>
    );
};
