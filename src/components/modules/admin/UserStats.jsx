import {
    UsersRound,
    UserRoundCheck,
    UserRoundX,
    ShieldCheck,
} from "lucide-react";

import {
    UserStatsGrid,
    StatCard,
    StatHeader,
    StatIcon,
    StatLabel,
    StatValue,
    StatDescription,
} from "../../../styles/components/modules/admin/userStats.styles";

const statDefinitions = [
    {
        key: "total",
        label: "Total de usuarios",
        description: "Todas las cuentas registradas",
        icon: UsersRound,
        color: "blue",
    },
    {
        key: "active",
        label: "Usuarios activos",
        description: "Cuentas habilitadas",
        icon: UserRoundCheck,
        color: "teal",
    },
    {
        key: "inactive",
        label: "Usuarios inactivos",
        description: "Cuentas deshabilitadas",
        icon: UserRoundX,
        color: "gray",
    },
    {
        key: "administrators",
        label: "Administradores",
        description: "Cuentas con rol ADMIN",
        icon: ShieldCheck,
        color: "gold",
    },
];

function UserStats({stats = {}}) {
    return (
        <UserStatsGrid>
            {
                statDefinitions.map((item) => {
                    const Icon = item.icon;

                    return (
                        <StatCard key={item.key} $color={item.color}>
                            <StatHeader>
                                <StatIcon $color={item.color}>
                                    <Icon size={21} strokeWidth={1.8}/>
                                </StatIcon>

                                <StatLabel>{item.label}</StatLabel>
                            </StatHeader>

                            <StatValue>
                                {stats[item.key] ?? "-"}
                            </StatValue>

                            <StatDescription>
                                {item.description}
                            </StatDescription>
                        </StatCard>
                    )
                })
            }
        </UserStatsGrid>
    );
}

export default UserStats;