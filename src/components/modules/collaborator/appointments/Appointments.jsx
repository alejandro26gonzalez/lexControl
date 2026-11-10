import { useMemo, useState, useEffect, useCallback } from "react";
import { FiPlus } from "react-icons/fi";

import * as S from "../../../../styles/components/modules/collaborator/appointments.styles";

import {
    getAgenda,
    createAppointment,
    rescheduleAppointment,
    cancelAppointment
} from "../../../../modules/collaborator/agenda.service";

import {
    getCourts
} from "../../../../modules/admin/sites/courts.service";

import {
    getSites
} from "../../../../modules/admin/sites/sites.service";

import {
    getExpedientes
} from "../../../../modules/collaborator/expedientes.service";

import useFeedbackAlert from "../../../../hooks/useFeedbackAlert";
import FeedbackAlert from "../../../feedbackAlert/FeedbackAlert";

import ConfirmationModal from "../../../modals/confirmation/ConfirmationModal";

import { getConfirmationConfig } from "../../../../config/components/confirmations";

import Stats from "./components/Stats";
import HeaderCalendar from "./components/HeaderCalendar";
import AppointmentFilters from "./components/AppointmentFilters";
import AppointmentList from "./components/AppointmentList";
import AppointmentModal from "./components/AppointmentModal";

const getToday = () => {
    const date = new Date();
    const offset = date.getTimezoneOffset();

    return new Date(date.getTime() - offset * 60000)
        .toISOString()
        .split("T")[0];
};

const normalizeAppointment = (item) => {
        const start = new Date(item.starts_at);
        const end = new Date(item.ends_at);

        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            return `${year}-${month}-${day}`;
        };

        const formatTime = (date) => {
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");

            return `${hours}:${minutes}`;
        };

        return {
            id: item.id,
            expedienteId: item.expediente_id,
            title: item.title,

            type: item.event_type === "AUDIENCIA"
                ? "hearing"
                : "meeting",

            date: formatDate(start),
            startTime: formatTime(start),
            endTime: formatTime(end),

            client: item.client_name || "Cliente",
            caseNumber: item.case_number || "Sin radicado",

            court: item.court,

            modality: item.modality === "VIRTUAL"
                ? "virtual"
                : "in_person",

            location: item.meeting_url || item.location || "",

            status: {
                PENDIENTE: "scheduled",
                COMPLETADO: "completed",
                CANCELADO: "cancelled"
            }[item.status] || "scheduled",

            description: item.description || ""
        };
    };

const Appointments = () => {

    const {
        showFeedback,
        clearFeedback,
        feedbackAlert
    } = useFeedbackAlert();

    const [sites, setSites] = useState([]);
    const [courts, setCourts] = useState([]);
    const [loadingCatalogs, setLoadingCatalogs] = useState(false);

    const [selectedPeriod, setSelectedPeriod] = useState("month");
    const [selectedDate, setSelectedDate] = useState(getToday());


    const [confirmation, setConfirmation] = useState(null);
    const [processingConfirmation, setProcessingConfirmation] = useState(null);

    const [statsRefreshKey, setStatsRefreshKey] = useState(0);

    const [appointmentModal, setAppointmentModal] = useState(null);

    const [appointments, setAppointments] = useState([]);

    const [filter, setFilter] = useState("all");


    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    const [expedientes, setExpedientes] = useState([]);
    const [loadingExpedientes, setLoadingExpedientes] = useState(false);

    const filteredAppointments = useMemo(() => {
        return appointments
            .filter((item) =>
                filter === "all" || item.type === filter
            )
            .sort((a, b) => {
                const dateComparison = a.date.localeCompare(b.date);

                if (dateComparison !== 0) {
                    return dateComparison;
                }

                return a.startTime.localeCompare(b.startTime);
            });
    }, [appointments, filter]);

    const openCreateModal = () => {
        setError("");

        setAppointmentModal({
            mode: "create",
            appointment: null
        });
    };

    const openRescheduleModal = (appointment) => {
        setError("");

        setAppointmentModal({
            mode: "reschedule",
            appointment
        });
    };

    const closeAppointmentModal = () => {
        if (saving) return;

        setAppointmentModal(null);
        setError("");
    };


    const requestConfirmation = (action, payload, handler) => {

        const config = getConfirmationConfig(action, payload, handler);

        if (!config) return;

        setConfirmation(config);
    }

    // ========================================================================================


    const loadCatalogs = useCallback(async () => {
        setLoadingCatalogs(true);

        try {
            const [sitesResponse, courtsResponse] = await Promise.all([
                getSites(),
                getCourts()
            ]);

            setSites(sitesResponse?.sites ?? []);
            setCourts(courtsResponse?.courts ?? []);

            
            
        } catch (err) {
            console.error("Error cargando catálogos:", err);
            showFeedback("CATALOG_LOAD_ERROR");
            
        } finally {
            setLoadingCatalogs(false);
        }
    }, [showFeedback]);
    
    const loadAgenda = useCallback(async (
        date = selectedDate,
        period = selectedPeriod,
        currentFilter = filter
    ) => {
        setLoading(true);
        setError("");
        
        try {
            const params = { date, period };
            
            if (currentFilter !== "all") {
                params.event_type = currentFilter === "hearing"
                ? "AUDIENCIA"
                : "REUNION";
            }
            
            const agendaResponse = await getAgenda(params)
            
            
            const agendaData = agendaResponse?.data ?? [];

            setAppointments(
                agendaData.map(normalizeAppointment)
            );


        } catch (err) {
            console.error("Error cargando agenda:", err);
            setError(
                err.message || "No fue posible cargar la agenda."
            );

        } finally {
            setLoading(false);
        }
    }, [selectedDate, selectedPeriod, filter]);

    const loadExpedientes = useCallback(async () => {
        setLoadingExpedientes(true);

        try {
            const response = await getExpedientes();

            setExpedientes(response?.data ?? []);
        } catch (err) {
            console.error("Error cargando los expedientes;", err);

            setError(
                err.message || "No fue posible cargar los expedientes."
            );            
        } finally {
            setLoadingExpedientes(false);
        }
    }, []);

    useEffect(() => {
        loadCatalogs();
    }, [loadCatalogs]);

    useEffect(() => {
        loadAgenda();
    }, [loadAgenda]);

    useEffect(() => {
        loadExpedientes();
    }, [loadExpedientes]);

    
    const handleCreate = async (payload) => {

        setSaving(true);
        setError("");
        clearFeedback();

        try {
            await createAppointment(payload);

            setSelectedDate(payload.date);
            setStatsRefreshKey((previous) => previous + 1);

            setAppointmentModal(null);

            showFeedback("APPOINTMENT_CREATED");

        } catch (err) {
            console.error("Error creando compromiso:", err);

            setError(
                err.message || "No fue posible registrar el compromiso."
            );

            showFeedback(
                err?.data?.code === "APPOINTMENT_CONFLICT"
                    ? "APPOINTMENT_CONFLICT"
                    : "APPOINTMENT_CREATE_ERROR"
            );

        } finally {
            setSaving(false);
        }
    };

    
    const handleCancel = async (appointment) => {
        if (!appointment?.id) return;

        setProcessingConfirmation(true);
        setError("");

        try {
            await cancelAppointment(appointment.id);

            setConfirmation(null);

            setStatsRefreshKey((previous) => previous + 1);

            await loadAgenda();

            showFeedback("APPOINTMENT_CANCELLED");

        } catch (err) {
            console.error("Error cancelando compromiso:", err);

            showFeedback("APPOINTMENT_CANCEL_ERROR");

        } finally {
            setProcessingConfirmation(false);
        }
    };


    const handleReschedule = async (appointment, payload) => {
        setSaving(true);
        setError("");

        try {
            await rescheduleAppointment(appointment.id, payload);

            setSelectedDate(payload.date);
            setStatsRefreshKey((previous) => previous + 1);

            setAppointmentModal(null);

            showFeedback("APPOINTMENT_RESCHEDULED");

        } catch (err) {
            console.error("Error reprogramando:", err);

            setError(
                err.message || "No fue posible reprogramar el compromiso."
            );

            showFeedback("APPOINTMENT_RESCHEDULE_ERROR");
        }
    };


    const handleConfirmation = async () => {
        if (!confirmation?.handler || processingConfirmation) return;

        await confirmation.handler(confirmation.payload);
    };


    return (
        <S.Page>

        {feedbackAlert && (
            <FeedbackAlert 
            config={feedbackAlert}
            onClose={clearFeedback}
            />
        )}

        <S.Header>

            <S.PrimaryButton 
                onClick={openCreateModal}
            >
                <FiPlus />
                Nuevo compromiso
            </S.PrimaryButton>
        </S.Header>

        <Stats 
            period={selectedPeriod}
            date={selectedDate}
            refreshKey={statsRefreshKey}
        />

        <S.ContentCard>
            
            <HeaderCalendar 
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
                period={selectedPeriod}
                onPeriodChange={setSelectedPeriod}
            />

            <AppointmentFilters 
                filter={filter}
                onFilterChange={setFilter}
            />

            <AppointmentList
                appointments={filteredAppointments}
                loading={loading}
                onReschedule={openRescheduleModal}
                onCancel={(appointment) =>
                    requestConfirmation(
                        "APPOINTMENT_CANCEL",
                        appointment,
                        handleCancel
                    )
                }
            />

        </S.ContentCard>

        <AppointmentModal
            isOpen={Boolean(appointmentModal)}
            mode={appointmentModal?.mode}
            appointment={appointmentModal?.appointment}
            selectedDate={selectedDate}
            expedientes={expedientes}
            loadingExpedientes={loadingExpedientes}
            sites={sites}
            courts={courts}
            loadingCatalogs={loadingCatalogs}
            saving={saving}
            error={error}
            onClose={closeAppointmentModal}
            onSubmit={
                appointmentModal?.mode === "reschedule"
                    ? (payload) => handleReschedule(
                        appointmentModal.appointment,
                        payload
                    )
                    : handleCreate
            }
        />

        <ConfirmationModal
            isOpen={Boolean(confirmation)}
            title={confirmation?.title}
            description={confirmation?.description}
            confirmText={confirmation?.confirmText}
            cancelText={confirmation?.cancelText}
            variant={confirmation?.variant}
            loading={processingConfirmation}
            onConfirm={handleConfirmation}
            onClose={() => {
                if (!processingConfirmation) {
                    setConfirmation(null);
                }
            }}
        />
        </S.Page>
    );
};

export default Appointments;
