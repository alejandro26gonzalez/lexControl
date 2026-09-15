import { 
    Navigate,
    Outlet
} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Forbidden from "../../pages/private/forbidden/Forbidden";

const RequireRole = ({ allowedRoles }) => {
    const {
        user,
        loading,
        isAuthenticated
    } = useAuth();

    if (loading){
        return null;
    };

    if (!isAuthenticated){
        return (
            <Navigate 
            to="/portal/login"
            replace
            />
        )
    };

    const userRoles = user?.roles || [];

    const hasPermission = userRoles.some(
        role => allowedRoles.includes(role)
    );

    if (!hasPermission) {
        return <Forbidden />
    };

    return <Outlet />;

};

export default RequireRole;