import {Link} from "react-router-dom";
import {BlockNavbar, BlockNavLinks, ItemNavLinks, ListNavLinks} from "./NavBar.styled";
import {useTheme} from "../../../shared/hooks/useTheme";
import {Theme} from "../../../app/App.tsx";
import {SubTitle} from "../../../app/styles/variables/components.ts";
import {dataNavBar} from "../../../shared/utils/dataNavbar";
import {SwitchLang} from "../../SwitchLang/ui/SwitchLang.tsx";

export const Navbar = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <BlockNavbar>


            <BlockNavLinks>
                <ListNavLinks>
                    {dataNavBar.map(({label, link}, index) => {
                        return (
                                <ItemNavLinks key={index}>
                                    <Link to={link}>
                                        <SubTitle>{label}</SubTitle>
                                    </Link>
                                </ItemNavLinks>
                        )})}
                </ListNavLinks>
            </BlockNavLinks>

            <div>
                <SwitchLang />
                <button onClick={toggleTheme}>
                    {theme !== Theme.LIGHT ?
                        <img style={{width: '20px', height: '15px'}} src="src/shared/assets/icons/light_theme.png"
                             alt="light_theme"/>
                        :
                        <img style={{width: '15px', height: '15px'}} src="src/shared/assets/icons/dark_theme.png"
                             alt="dark_theme"/>
                    }
                </button>
            </div>

        </BlockNavbar>
    );
};
