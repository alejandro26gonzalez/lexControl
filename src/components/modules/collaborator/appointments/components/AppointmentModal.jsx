
import { useEffect, useState } from "react";

import {
    FiCalendar,
    FiCheck,
    FiX,
    FiUser,
} from "react-icons/fi";

import { FaBalanceScale as FiScale } from "react-icons/fa";

import * as S from "../../../../../styles/components/modules/collaborator/appointments.styles";

// =====================================================
// FORMULARIO INICIAL
// =====================================================

const EMPTY_FORM = {
    type: "meeting",
    title: "",
    expedienteId: "",
    date: "",
    startTime: "",
    endTime: "",
    modality: "virtual",
    siteId: "",
    courtId: "",
    meetingUrl: "",
    description: ""
};

// =====================================================
// INICIALIZACIÓN DEL FORMULARIO
// =====================================================

const getInitialForm = (mode, appointment, selectedDate) => {

    if (mode === "reschedule" && appointment) {
        return {
            ...EMPTY_FORM,
            date: appointment.date,
            startTime: appointment.startTime,
            endTime: appointment.endTime
        };
    }

    return {
        ...EMPTY_FORM,
        date: selectedDate || ""
    };
};

// =====================================================
// COMPONENTE
// =====================================================

const AppointmentModal = ({
    isOpen,
    mode = "create",
    appointment = null,
    selectedDate,
    expedientes = [],
    loadingExpedientes = false,
    sites = [],
    courts = [],
    loadingCatalogs = false,
    saving = false,
    error = "",
    onClose,
    onSubmit
}) => {

    const [form, setForm] = useState(
        getInitialForm(mode, appointment, selectedDate)
    );

    const [validationError, setValidationError] = useState("");

    const isReschedule = mode === "reschedule";

    // =====================================================
    // REINICIAR FORMULARIO
    // =====================================================

    useEffect(() => {

        if (!isOpen) return;

        setForm(getInitialForm(mode, appointment, selectedDate));
        setValidationError("");

    }, [isOpen, mode, appointment, selectedDate]);

    if (!isOpen) return null;

    // =====================================================
    // ACTUALIZAR CAMPOS
    // =====================================================

    const updateForm = (field, value) => {

        setForm((previous) => ({
            ...previous,
            [field]: value
        }));

        setValidationError("");
    };

    // =====================================================
    // CAMBIAR TIPO DE COMPROMISO
    // =====================================================

    const handleTypeChange = (type) => {

        setForm((previous) => ({
            ...previous,
            type,
            siteId: "",
            courtId: ""
        }));

        setValidationError("");
    };

    // =====================================================
    // CAMBIAR MODALIDAD
    // =====================================================

    const handleModalityChange = (modality) => {

        setForm((previous) => ({
            ...previous,
            modality,
            siteId: "",
            meetingUrl: ""
        }));

        setValidationError("");
    };

    // =====================================================
    // VALIDACIONES
    // =====================================================

    const validateForm = () => {

        // ---------------------------------------------
        // REPROGRAMACIÓN
        // ---------------------------------------------

        if (isReschedule) {

            if (!form.date || !form.startTime || !form.endTime) {
                return "Completa la fecha y los horarios.";
            }

            if (form.startTime >= form.endTime) {
                return "La hora de finalización debe ser posterior a la inicial.";
            }

            return "";
        }

        // ---------------------------------------------
        // CAMPOS GENERALES
        // ---------------------------------------------

        if (!form.expedienteId) {
            return "Selecciona un expediente.";
        }

        if (!form.title.trim()) {
            return "Ingresa el título del compromiso.";
        }

        if (!form.date || !form.startTime || !form.endTime) {
            return "Completa la fecha y los horarios.";
        }

        if (form.startTime >= form.endTime) {
            return "La hora de finalización debe ser posterior a la inicial.";
        }

        // ---------------------------------------------
        // REUNIÓN PRESENCIAL: REQUIERE SEDE
        // ---------------------------------------------

        if (
            form.type === "meeting" &&
            form.modality === "in_person" &&
            !form.siteId
        ) {
            return "Selecciona una sede para la reunión.";
        }

        // ---------------------------------------------
        // AUDIENCIA: REQUIERE JUZGADO
        // ---------------------------------------------

        if (form.type === "hearing" && !form.courtId) {
            return "Selecciona el juzgado notificante.";
        }

        // ---------------------------------------------
        // MODALIDAD VIRTUAL: REQUIERE ENLACE HTTPS
        // ---------------------------------------------

        if (form.modality === "virtual") {

            if (!form.meetingUrl.trim()) {
                return "Ingresa el enlace de la reunión.";
            }

            try {
                const url = new URL(form.meetingUrl.trim());

                if (url.protocol !== "https:") {
                    return "El enlace debe utilizar HTTPS.";
                }

            } catch {
                return "Ingresa un enlace válido.";
            }
        }

        return "";
    };

    // =====================================================
    // ENVÍO DEL FORMULARIO
    // =====================================================

    const handleSubmit = (event) => {

        event.preventDefault();

        const validation = validateForm();

        if (validation) {
            setValidationError(validation);
            return;
        }

        // ---------------------------------------------
        // REPROGRAMAR
        // ---------------------------------------------

        if (isReschedule) {

            onSubmit({
                date: form.date,
                start_time: form.startTime,
                end_time: form.endTime
            });

            return;
        }

        // ---------------------------------------------
        // CREAR COMPROMISO
        // ---------------------------------------------

        const payload = {
            expediente_id: Number(form.expedienteId),

            title: form.title.trim(),

            event_type: form.type === "hearing"
                ? "AUDIENCIA"
                : "REUNION",

            modality: form.modality === "virtual"
                ? "VIRTUAL"
                : "PRESENCIAL",

            date: form.date,
            start_time: form.startTime,
            end_time: form.endTime,

            site_id:
                form.type === "meeting" &&
                form.modality === "in_person"
                    ? Number(form.siteId)
                    : null,

            court_id:
                form.type === "hearing"
                    ? Number(form.courtId)
                    : null,

            meeting_url: form.modality === "virtual"
                ? form.meetingUrl.trim()
                : null,

            description: form.description.trim() || null
        };

        onSubmit(payload);
    };

    // =====================================================
    // RENDERIZADO
    // =====================================================

    return (
        <S.ModalOverlay onClick={saving ? undefined : onClose}>

            <S.Modal onClick={(event) => event.stopPropagation()}>

                {/* ==================================
                    ENCABEZADO
                ================================== */}

                <S.ModalHeader>

                    <div>
                        <S.Eyebrow>
                            {isReschedule ? "ACTUALIZACIÓN" : "NUEVO REGISTRO"}
                        </S.Eyebrow>

                        <S.ModalTitle>
                            {isReschedule
                                ? "Reprogramar compromiso"
                                : "Agendar compromiso"}
                        </S.ModalTitle>

                        <S.Description>
                            {isReschedule
                                ? "Modifica la fecha y el horario del compromiso."
                                : "Registra una reunión o una audiencia judicial."}
                        </S.Description>
                    </div>

                    <S.CloseButton
                        type="button"
                        onClick={onClose}
                        disabled={saving}
                        aria-label="Cerrar modal"
                    >
                        <FiX />
                    </S.CloseButton>

                </S.ModalHeader>

                {/* ==================================
                    FORMULARIO
                ================================== */}

                <S.Form onSubmit={handleSubmit}>

                    <S.FormGrid>

                        {/* TIPO DE COMPROMISO */}

                        {!isReschedule && (
                            <S.Field $full>

                                <label>Tipo de compromiso</label>

                                <S.TypeSelector>

                                    <S.TypeOption
                                        as="button"
                                        type="button"
                                        $active={form.type === "meeting"}
                                        onClick={() => handleTypeChange("meeting")}
                                    >
                                        <FiUser />
                                        <strong>Reunión con cliente</strong>
                                        <span>Programada por la compañía</span>
                                    </S.TypeOption>

                                    <S.TypeOption
                                        as="button"
                                        type="button"
                                        $active={form.type === "hearing"}
                                        onClick={() => handleTypeChange("hearing")}
                                    >
                                        <FiScale />
                                        <strong>Audiencia judicial</strong>
                                        <span>Notificada por el juzgado</span>
                                    </S.TypeOption>

                                </S.TypeSelector>

                            </S.Field>
                        )}

                        {/* TÍTULO */}

                        {!isReschedule && (
                            <S.Field $full>

                                <label>Título del compromiso *</label>

                                <input
                                    value={form.title}
                                    onChange={(event) =>
                                        updateForm("title", event.target.value)
                                    }
                                    placeholder={
                                        form.type === "meeting"
                                            ? "Ej. Revisión de estrategia"
                                            : "Ej. Audiencia inicial"
                                    }
                                    required
                                />

                            </S.Field>
                        )}

                        {/* EXPEDIENTE */}

                        {!isReschedule && (
                            <S.Field $full>

                                <label>Expediente asociado *</label>

                                <select
                                    value={form.expedienteId}
                                    onChange={(event) =>
                                        updateForm("expedienteId", event.target.value)
                                    }
                                    required
                                    disabled={
                                        loadingExpedientes ||
                                        expedientes.length === 0
                                    }
                                >
                                    <option value="">
                                        {loadingExpedientes
                                            ? "Cargando expedientes..."
                                            : expedientes.length === 0
                                                ? "No hay expedientes disponibles"
                                                : "Selecciona un expediente"
                                        }
                                    </option>

                                    {expedientes.map((expediente) => (
                                        <option
                                            value={expediente.id}
                                            key={expediente.id}
                                        >
                                            {expediente.radicado} — {expediente.title}
                                        </option>
                                    ))}

                                </select>

                            </S.Field>
                        )}

                        {/* JUZGADO */}

                        {!isReschedule && form.type === "hearing" && (
                            <S.Field $full>

                                <label>Juzgado notificante *</label>

                                <select
                                    value={form.courtId}
                                    onChange={(event) =>
                                        updateForm("courtId", event.target.value)
                                    }
                                    required
                                    disabled={
                                        loadingCatalogs ||
                                        courts.length === 0
                                    }
                                >
                                    <option value="">
                                        {loadingCatalogs
                                            ? "Cargando juzgados..."
                                            : courts.length === 0
                                                ? "No hay juzgados disponibles"
                                                : "Selecciona un juzgado"
                                        }
                                    </option>

                                    {courts.map((court) => (
                                        <option
                                            key={court.id}
                                            value={court.id}
                                        >
                                            {court.name} — {court.city}
                                        </option>
                                    ))}

                                </select>

                            </S.Field>
                        )}

                        {/* FECHA */}

                        <S.Field>

                            <label>Fecha *</label>

                            <input
                                type="date"
                                value={form.date}
                                onChange={(event) =>
                                    updateForm("date", event.target.value)
                                }
                                required
                            />

                        </S.Field>

                        {/* HORA INICIAL */}

                        <S.Field>

                            <label>Hora de inicio *</label>

                            <input
                                type="time"
                                value={form.startTime}
                                onChange={(event) =>
                                    updateForm("startTime", event.target.value)
                                }
                                required
                            />

                        </S.Field>

                        {/* HORA FINAL */}

                        <S.Field>

                            <label>Hora de finalización *</label>

                            <input
                                type="time"
                                value={form.endTime}
                                onChange={(event) =>
                                    updateForm("endTime", event.target.value)
                                }
                                required
                            />

                        </S.Field>

                        {/* MODALIDAD Y CAMPOS CONDICIONALES */}

                        {!isReschedule && (
                            <>
                                {/* MODALIDAD */}

                                <S.Field>

                                    <label>Modalidad</label>

                                    <select
                                        value={form.modality}
                                        onChange={(event) =>
                                            handleModalityChange(event.target.value)
                                        }
                                    >
                                        <option value="virtual">Virtual</option>
                                        <option value="in_person">Presencial</option>
                                    </select>

                                </S.Field>

                                {/* SEDE PARA REUNIONES PRESENCIALES */}

                                {form.type === "meeting" &&
                                    form.modality === "in_person" && (
                                        <S.Field $full>

                                            <label>Sede de la reunión *</label>

                                            <select
                                                value={form.siteId}
                                                onChange={(event) =>
                                                    updateForm("siteId", event.target.value)
                                                }
                                                required
                                                disabled={
                                                    loadingCatalogs ||
                                                    sites.length === 0
                                                }
                                            >
                                                <option value="">
                                                    {loadingCatalogs
                                                        ? "Cargando sedes..."
                                                        : sites.length === 0
                                                            ? "No hay sedes disponibles"
                                                            : "Selecciona una sede"
                                                    }
                                                </option>

                                                {sites.map((site) => (
                                                    <option
                                                        key={site.id}
                                                        value={site.id}
                                                    >
                                                        {site.name} — {site.city}
                                                    </option>
                                                ))}

                                            </select>

                                        </S.Field>
                                    )}

                                {/* ENLACE PARA COMPROMISOS VIRTUALES */}

                                {form.modality === "virtual" && (
                                    <S.Field $full>

                                        <label>Enlace de reunión *</label>

                                        <input
                                            type="url"
                                            value={form.meetingUrl}
                                            onChange={(event) =>
                                                updateForm("meetingUrl", event.target.value)
                                            }
                                            placeholder="https://..."
                                            required
                                        />

                                    </S.Field>
                                )}

                                {/* OBSERVACIONES */}

                                <S.Field $full>

                                    <label>Observaciones</label>

                                    <textarea
                                        rows="3"
                                        value={form.description}
                                        onChange={(event) =>
                                            updateForm("description", event.target.value)
                                        }
                                        placeholder="Información adicional del compromiso..."
                                    />

                                </S.Field>
                            </>
                        )}

                    </S.FormGrid>

                    {/* AVISO */}

                    {!isReschedule && (
                        <S.CalendarNotice>
                            <FiCalendar />

                            Este compromiso bloqueará la agenda del abogado y se publicará
                            en el calendario compartido con el cliente.
                        </S.CalendarNotice>
                    )}

                    {/* ERRORES */}

                    {(validationError || error) && (
                        <S.ErrorMessage>
                            {validationError || error}
                        </S.ErrorMessage>
                    )}

                    {/* ACCIONES */}

                    <S.ModalActions>

                        <S.SecondaryButton
                            type="button"
                            onClick={onClose}
                            disabled={saving}
                        >
                            Cancelar
                        </S.SecondaryButton>

                        <S.PrimaryButton
                            type="submit"
                            disabled={
                                saving ||
                                (loadingExpedientes && !isReschedule) ||
                                (loadingCatalogs && !isReschedule)
                            }
                        >
                            <FiCheck />

                            {saving
                                ? "Procesando..."
                                : isReschedule
                                    ? "Guardar cambios"
                                    : "Registrar compromiso"}
                        </S.PrimaryButton>

                    </S.ModalActions>

                </S.Form>

            </S.Modal>

        </S.ModalOverlay>
    );
};

export default AppointmentModal;
