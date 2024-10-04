import {Link} from "react-router-dom";
import {BlockNavbar} from "./NavBar.styled";

export const Navbar = () => {
    return (
        <BlockNavbar>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </BlockNavbar>
    );
};
