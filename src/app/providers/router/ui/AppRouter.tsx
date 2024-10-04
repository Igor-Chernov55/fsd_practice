import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig.tsx";

export const AppRouter = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}, key) => (
                     <Route key={key} path={path} element={
                         <Suspense fallback={<p>...Loading</p>}>
                             {element}
                        </Suspense>
                     } />
                ))}
            </Routes>
        </Suspense>
    );
};