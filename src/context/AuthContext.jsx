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
    const [expiresAt, setExpiresAt] = useState(null);

    useEffect(() => {
        async function checkSession() {
            try {
                const response = await getCurrentUser();

                if (response.authenticated) {
                    setUser(response.user);
                    setExpiresAt(response.expires_at);
                } else {
                    setUser(null);
                    setExpiresAt(null);
                };
            } catch {
                setUser(null);
                setExpiresAt(null);
            } finally {
                setLoading(false);
            }
        }

        checkSession();
    }, []);

    async function login(email, password, rememberMe) {
        const response = await loginRequest(email, password, rememberMe);
        const session = await getCurrentUser();
        
        if (session.authenticated) {
            setUser(response.user);
            setExpiresAt(session.expires_at);
        } else {
            setUser(null);
            setExpiresAt(null);
        }
        
        return response;
    }

    async function logout() {
        await logoutRequest();

        setUser(null);
        setExpiresAt(null);
    }

    function clearAuthentication() {
        setUser(null);
        setExpiresAt(null);
    }

    const value = {
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        logout,
        expiresAt,
        clearAuthentication
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