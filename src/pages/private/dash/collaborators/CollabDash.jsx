import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

const CollabDash = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/portal/login", { replace: true });
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div>
            <h1>Dashboard Cliente</h1>

            <p>Usuario: {user?.email}</p>

            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
        </div>
    );
};

export default CollabDash;