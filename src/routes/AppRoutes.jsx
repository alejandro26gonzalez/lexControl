import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";


const AppRoutes = () => {
    const routes = useRoutes([
        ...PublicRoutes,
        ...PrivateRoutes,
    ]);
    
    return (
        <Suspense fallback={<LoadingScreen />}>
            {routes}
        </Suspense>
    )
};
export default AppRoutes;