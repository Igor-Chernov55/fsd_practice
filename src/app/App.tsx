import 'react-toastify/dist/ReactToastify.css';
import {AppBlock, ContentPage} from "./App.styled";
import {FC, Suspense, useTransition} from "react";
import {useTheme} from "./providers/themeProvider";
import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";
import {AppRouter} from "./providers/router";
import {Carousel} from "rsuite";
import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}


export const App: FC = () => {
    const {theme} = useTheme();

    console.log(theme)
    return (
        <AppBlock $theme={theme}>

            <Suspense fallback={<Carousel />}>
                <Navbar/>
                <ContentPage>
                    <Sidebar/>
                    <AppRouter/>
                </ContentPage>
            </Suspense>

        </AppBlock>)
};
