import {MainContainer} from "./styles/variables/components.ts";
import {ThemeProvider} from "styled-components";
import {themes} from "./styles/themes/themes.styled.tsx";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

function App() {
    return (
        <ThemeProvider theme={ localStorage.getItem('theme') === Theme.LIGHT ? themes.light : themes.dark}>
        <MainContainer>
            <Navbar />
            <AppRouter />
        </MainContainer>
        </ThemeProvider>
    )
}

export default App
