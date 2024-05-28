import 'react-toastify/dist/ReactToastify.css';
import {AppBlock} from "./App.styled";
import {FC} from "react";
import {useTheme} from "./providers/themeProvider";
import {Navbar} from "../widgets/Navbar";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
export const App:FC = () => {
        const {theme, toggleTheme} = useTheme();

    return <AppBlock $theme={theme}>
        <Navbar />
    </AppBlock>
};
