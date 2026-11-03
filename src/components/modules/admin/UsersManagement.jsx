import { useCallback, useEffect, useState } from "react";
import UserStats from "./UserStats";
import DataTable from "./data-table/DataTable";
import { usersTableConfig } from "../../../modules/admin/users/users.config";
import useFeedbackAlert from "../../../hooks/useFeedbackAlert";
import FeedbackAlert from "../../feedbackAlert/FeedbackAlert";

import {
    updateUser,
    toggleUserStatus,
    deleteUser,
    getUsers,
    getUserStats
} from "../../../modules/admin/users/users.service";


function UsersPage() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState(null);

    const {
        showFeedback,
        clearFeedback,
        feedbackAlert
    } = useFeedbackAlert();

    const loadUsers = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const [usersResponse, statsResponse] = await Promise.all([
                getUsers(),
                getUserStats()
            ]);

            const records = Array.isArray(usersResponse)
                ? usersResponse
                : usersResponse.users ?? [];

            setUsers(records);
            setStats(statsResponse.stats);

        } catch (err) {
            setError(
                err?.data?.message ||
                "No fue posible cargar los usuarios."
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            loadUsers();
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [loadUsers]);

    
    const handleEdit = async (user, changes) => {
        try {
            await updateUser(user.id, changes);

            await loadUsers();

            return {
                success: true,
                message: "Usuario actualizado correctamente.",
            };
        } catch (error) {
            console.error("Error actualizando usuario:", error);

            return {
                success: false,
                message:
                    error?.data?.message ||
                    "No fue posible actualizar el usuario.",
            };
        }
    };

    const handleToggleStatus = async (user) => {
        try {
            await toggleUserStatus(user.id, !user.is_active);

            await loadUsers();

            showFeedback(
                user.is_active ? "USER_DISABLED" : "USER_ENABLED"
            );

            return { success: true,};

        } catch (error) {
            console.error("Error cambiando estado:", error);
            showFeedback("USER_STATUS_ERROR");

            return { success: false };
        }
    };

    const handleDelete = async (user) => {
        try {
            await deleteUser(user.id);

            await loadUsers();

            showFeedback("USER_DELETED");

            return {
                success: true,
            };

        } catch (error) {
            console.error("Error eliminando usuario:", error);

            showFeedback(
                error?.data?.code === "USER_DELETE_CONFLICT"
                    ? "USER_DELETE_CONFLICT"
                    : "USER_DELETE_ERROR"
            );

            return {
                success: false,
                message:
                    error?.data?.error ||
                    "No fue posible eliminar el usuario.",
            };
        }
    };

    const handleUserCreated = async (response) => {
        await loadUsers();
        if (response.email_sent) {
            showFeedback("USER_CREATED");
        } else {
            showFeedback("USER_CREATED_EMAIL_FAILED");
        }
    }

    const handleUserUpdated = async () => {
        await loadUsers();
        showFeedback("USER_UPDATED");
    };




    return (
        <>
            {stats && <UserStats stats={stats}/>}

            {feedbackAlert && (
                <FeedbackAlert 
                config={feedbackAlert}
                onClose={clearFeedback}
                />
            )}


            <DataTable 
                config={usersTableConfig}
                data={users}
                loading={loading}
                error={error}
                onRetry={loadUsers}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleStatus={handleToggleStatus}
                onUserCreated={handleUserCreated}
                onUserUpdated={handleUserUpdated}
            />
        </>
    );
}

export default UsersPage;