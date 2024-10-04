import {MainContainer} from "./styles/variables/components.ts";
import {ThemeProvider} from "styled-components";


import {themes} from "./styles/themes/themes.styled.tsx";
import {useTheme} from "../shared/lib/useTheme";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

function App() {
    const {toggleTheme} = useTheme()

    // useEffect(() => {
    //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //         localStorage.setItem('theme', Theme.LIGHT)
    //     }
    //     if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //         localStorage.setItem('theme', Theme.DARK)
    //     }
    //
    // },[])

    console.log(window.matchMedia("(prefers-color-scheme: dark)"))
    return (
        <ThemeProvider theme={ localStorage.getItem('theme') === Theme.LIGHT ? themes.light : themes.dark}>
        <MainContainer>
            <button onClick={toggleTheme}>
                toggle theme
            </button>
            <Navbar />
            <AppRouter />
        </MainContainer>
        </ThemeProvider>
    )
}

export default App
