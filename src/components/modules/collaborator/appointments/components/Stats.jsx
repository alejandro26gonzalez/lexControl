import { useState, useEffect } from "react";


import {
    FiCalendar,
    FiClock,
    FiCheck,
} from "react-icons/fi";

import { FaBalanceScale as FiScale } from "react-icons/fa";

import {
    StatsGrid,
    StatCard,
    StatIcon,
    StatValue,
    StatLabel
} from "../../../../../styles/components/modules/collaborator/appointments.styles";

import {
    getAgendaSummary
} from "../../../../../modules/collaborator/agenda.service";


const EMPTY_STATS = {
    total: 0,
    pending: 0,
    completed: 0,
    hearings: 0
};

const PERIOD_LABELS = {
    day: "Compromisos del día",
    week: "Compromisos de la semana",
    month: "Compromisos del mes"
};

const Stats = ({ period, date, refreshKey }) => {

    const [stats, setStats] = useState(EMPTY_STATS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        let active = true;

        const loadStats = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await getAgendaSummary({ period, date });

                if (!active) return;

                const data = response?.data ?? EMPTY_STATS;

                setStats({
                    total: data.total ?? 0,
                    pending: data.pending ?? 0,
                    completed: data.completed ?? 0,
                    hearings: data.hearings ?? 0
                });
            } catch (err) {
                if (!active) return;

                console.error("Error cargando estadísticas: ", err);

                setStats(EMPTY_STATS);
                setError(
                    err.message || "No fue posible cargar los indicadores"
                );
                
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        loadStats();

        return () => {
            active = false;
        };

    }, [period, date, refreshKey]);

    return (
        <>
        <StatsGrid>

            <StatCard>
                <StatIcon><FiCalendar /></StatIcon>

                <div>
                    <StatValue>
                        {loading ? "—" : stats.total}
                    </StatValue>

                    <StatLabel>
                        {PERIOD_LABELS[period] || "Compromisos"}
                    </StatLabel>
                </div>
            </StatCard>

            <StatCard>
                <StatIcon><FiClock /></StatIcon>

                <div>
                    <StatValue>
                        {loading ? "—" : stats.pending}
                    </StatValue>

                    <StatLabel>
                        Pendientes
                    </StatLabel>
                </div>
            </StatCard>

            <StatCard>
                <StatIcon><FiCheck /></StatIcon>

                <div>
                    <StatValue>
                        {loading ? "—" : stats.completed}
                    </StatValue>
                    <StatLabel>
                        Completados
                    </StatLabel>
                </div>
            </StatCard>

            <StatCard>
                <StatIcon><FiScale /></StatIcon>

                <div>
                    <StatValue>
                        {loading ? "—" : stats.hearings}
                    </StatValue>
                    <StatLabel>
                        Audiencias judiciales
                    </StatLabel>
                </div>
            </StatCard>
        </StatsGrid>

        {error && (
            <p role="alert">{error}</p>
        )}
        </>
    )
}
export default Stats;