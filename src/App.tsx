import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage";
import {MainPageAsync} from "./pages/MainPage";
import {Suspense} from "react";
import {MainContainer} from "./app/styles/variables/components.ts";
import {useTheme} from "./entites/hooks/useTheme";
import {ThemeProvider} from "styled-components";
import {themes} from "./app/styles/themes/themes.styled.tsx";

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
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </MainContainer>
        </ThemeProvider>
    )
}

export default App
