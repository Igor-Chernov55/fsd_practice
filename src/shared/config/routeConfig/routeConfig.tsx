import {RouteProps} from "react-router-dom";
import MainPage from "../../../pages/MainPage/ui/MainPage.tsx";
import {AboutPage} from "../../../pages/AboutPage";

export enum AppRoutes {
    MAIN = '/',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath["/"],
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}