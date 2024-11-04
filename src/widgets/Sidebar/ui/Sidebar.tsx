import {useState} from "react";
import {BlockSidebar} from "./SideBar.styled";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsed = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <BlockSidebar
            data-testid="sidebar-toggle"
            $active={collapsed}>
            <button onClick={handleCollapsed}>
                toggle
            </button>
        </BlockSidebar>
    );
};
