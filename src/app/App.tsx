import {MainContainer} from "./styles/variables/components";
import {ThemeProvider} from "styled-components";
import {themes} from "./styles/themes/themes.styled";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {Suspense, useContext} from "react";
import {ToggleThemeProvider} from "./providers/theme/lib/ToggleThemeProvider";
import {ContainerPage} from "./App.styled";
import {Sidebar} from "../widgets/Sidebar";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

function App() {
    const {theme} = useContext(ToggleThemeProvider);


    return (
        <ThemeProvider theme={theme === Theme.LIGHT ? themes.light : themes.dark}>
            <Suspense fallback=''>
                <MainContainer>
                    <Sidebar />
                    <ContainerPage>
                        <Navbar/>
                        <AppRouter/>
                    </ContainerPage>
                </MainContainer>
            </Suspense>
        </ThemeProvider>
    )
}

export default App
