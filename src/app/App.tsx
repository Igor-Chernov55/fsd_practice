import {MainContainer} from "./styles/variables/components.ts";
import {ThemeProvider} from "styled-components";
import {themes} from "./styles/themes/themes.styled.tsx";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {ContextToggleTheme} from "./providers/theme/ui/ContextToggleTheme.tsx";
import {useContext} from "react";
import {ToggleThemeProvider} from "./providers/theme/lib/ToggleThemeProvider.ts";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

function App() {
    const {theme} = useContext(ToggleThemeProvider)

    console.log('theme', theme)
    return (
        <ContextToggleTheme>
            <ThemeProvider theme={theme === Theme.LIGHT ? themes.light : themes.dark}>
                <MainContainer>
                    <Navbar/>
                    <AppRouter/>
                </MainContainer>
            </ThemeProvider>
        </ContextToggleTheme>
    )
}

export default App
