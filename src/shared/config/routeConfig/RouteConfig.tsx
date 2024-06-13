import React from "react";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import AboutPage from "../../../pages/AboutPage/ui/AboutPage";

enum Routes {
    MAIN = 'main',
    ABOUT_PAGE = 'about_page',
}
export const RoutePath: Record<Routes, string> = {
    [Routes.MAIN]: '/main',
    [Routes.ABOUT_PAGE]: '/about_page',
}


export const RouteConfig = {
    [RoutePath.main]: {path: RoutePath.main, element: <MainPage />},
    [RoutePath.about_page]: {path: RoutePath.about_page, element: <AboutPage />},
}

