import { 
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    getCurrentUser,
    login as loginRequest,
    logout as logoutRequest
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkSession() {
            try {
                const response = await getCurrentUser();

                if (response.authenticated) {
                    setUser(response.user);
                } else {
                    setUser(null);
                };
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        checkSession();
    }, []);

    async function login(email, password) {
        console.log("AUTH CONTEXT → intentando login");

        const response = await loginRequest(email, password);

        console.log("AUTH CONTEXT → respuesta del backend:", response);

        setUser(response.user);

        console.log("AUTH CONTEXT → usuario recibido:", response.user);

        return response;
    }

    async function logout() {
        await logoutRequest();

        setUser(null);
    }

    const value = {
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth debe utilizarse dentro de AuthProvider"
        );
    }

    return context;
};