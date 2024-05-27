import React from "react";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import AboutPage from "../../../pages/AboutPage/ui/AboutPage";

enum Routes {
    LIST = 'objects_list',
    CREATE_ANALYSIS = 'create_analysis',
}
export const RoutePath: Record<Routes, string> = {
    [Routes.LIST]: '/objects_list',
    [Routes.CREATE_ANALYSIS]: '/objects_list/create_analysis',
}


export const RouteConfig = {
    [RoutePath.objects_list]: {path: RoutePath.objects_list, element: <MainPage />},
    [RoutePath.create_analysis]: {path: RoutePath.create_analysis, element: <AboutPage />},
}

