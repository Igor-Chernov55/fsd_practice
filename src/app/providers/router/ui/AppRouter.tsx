import React, {Suspense} from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import { RouteConfig } from '../../../../shared/config';
import {PageWrapper} from "../../../App.styled";

export const AppRouter = () => {

    return (
        <Suspense fallback={""}>
            <Routes>
                {Object.values(RouteConfig).map(({path, element}, key) => {
                     return <Route
                                key={key}
                                path={path}
                                element={
                                    <PageWrapper>{element}</PageWrapper>
                     }/>
                })}
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </Suspense>
    );
};
