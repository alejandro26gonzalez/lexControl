import { 
    Navigate,
    Outlet,
    useLocation
} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const RequireAuth = () => {

    const {
        isAuthenticated,
        loading
    } = useAuth();

    const location = useLocation();

    if (loading) {
        return null;
    };

    if (!isAuthenticated) {
        return (
            <Navigate 
                to="/portal/login"
                replace
                state={{
                    from: location.pathname
                }}
            />
        );
    }

    return <Outlet />
};

export default RequireAuth;