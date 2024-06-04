import 'react-toastify/dist/ReactToastify.css';
import {AppBlock, ContentPage} from "./App.styled";
import {FC} from "react";
import {useTheme} from "./providers/themeProvider";
import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";
import {AppRouter} from "./providers/router";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const App:FC = () => {
        const {theme} = useTheme();

    return <AppBlock $theme={theme}>
        <Navbar />
        <ContentPage>
            <Sidebar />
            <AppRouter />
        </ContentPage>
    </AppBlock>
};
