import { 
    Navigate,
    Outlet
} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getDashboardRoute } from "../../utils/getDashboardRoute";

const RequireGuest = () => {
    const {
        isAuthenticated,
        loading,
        user
    } = useAuth();

    if (loading) {
        return null;
    }

    if (isAuthenticated) {
        const dashboardRoute = getDashboardRoute(user);

        console.log("REQUIRE GUEST → REDIRIGIENDO A:", dashboardRoute);

        return (
            <Navigate
                to={dashboardRoute}
                replace
            />
        );
    }

    console.log({
        isAuthenticated,
        loading,
        user,
    });

    return <Outlet />;
};

export default RequireGuest;