import React, {Suspense} from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {RouteConfig} from "./routeData";
import Login from "../pages/Login/Login";

export const AppRouter = () => {
    const {pathname} = useLocation()

    return (
        <Suspense>
            <Routes>
                {Object.values(RouteConfig).map(({path, element}, key) => {
                     return   <Route
                                key={key}
                                path={path}
                                element={element}/>
                })}
                <Route path="*" element={<Navigate to={'/objects_list'}/>}/>
            </Routes>
        </Suspense>
    );
};
