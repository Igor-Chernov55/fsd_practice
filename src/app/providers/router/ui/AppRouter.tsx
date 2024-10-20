import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";
import {ContainerFromElement} from "./AppRouter.styled";

export const AppRouter = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}, key) => (
                    <Route key={key} path={path} element={
                        <Suspense fallback={<p>sd</p>}>
                            <ContainerFromElement>
                                {element}
                            </ContainerFromElement>
                        </Suspense>
                    }/>
                ))}
            </Routes>
        </Suspense>
    );
};