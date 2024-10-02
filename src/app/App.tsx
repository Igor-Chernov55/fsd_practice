import {Link, Route, Routes} from "react-router-dom";

import {Suspense} from "react";
import {MainContainer} from "./styles/variables/components.ts";
import {ThemeProvider} from "styled-components";

import {useTheme} from "../shared/lib/useTheme";
import {themes} from "./styles/themes/themes.styled.tsx";
import {MainPage} from "../pages/MainPage";
import {AboutPage} from "../pages/AboutPage";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

function App() {
    const {toggleTheme} = useTheme()

    return (
        <ThemeProvider theme={ localStorage.getItem('theme') === Theme.LIGHT ? themes.light : themes.dark}>
        <MainContainer>
            <button onClick={toggleTheme}>
                toggle theme
            </button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<p>...Loading</p>}>
                <Routes>
                    <Route path={'/about'} element={<MainPage />}/>
                    <Route path={'/'} element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </MainContainer>
        </ThemeProvider>
    )
}

export default App
