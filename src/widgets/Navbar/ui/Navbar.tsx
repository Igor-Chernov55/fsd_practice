import {Link} from "react-router-dom";
import {BlockNavbar} from "./NavBar.styled";
import {useTheme} from "../../../shared/hooks/useTheme";
import {Theme} from "../../../app/App.tsx";


export const Navbar = () => {
    const {toggleTheme} = useTheme()

    return (
        <BlockNavbar>
            <button onClick={toggleTheme}>
                {localStorage.getItem('theme') === Theme.LIGHT ?
                    <img style={{width: '20px', height: '15px'}} src="src/shared/assets/icons/light_theme.png" alt=""/>
                    :
                    <img style={{width: '15px', height: '15px'}} src="src/shared/assets/icons/dark_theme.png" alt=""/>
                }
            </button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </BlockNavbar>
    );
};
