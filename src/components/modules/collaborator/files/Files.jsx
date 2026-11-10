
import { useMemo, useState } from "react";
import {
    FiFolder,
    FiPlus,
    FiSearch,
    FiEye,
    FiEdit2,
    FiX,
    FiCheck,
    FiCalendar,
    FiUser,
    FiFileText,
    FiArrowRight,
    FiActivity,
    FiClipboard,
} from "react-icons/fi";

import { FaBalanceScale as FiScale } from "react-icons/fa";
import { FaRegClock as FiClock } from "react-icons/fa";

import {
    Container,
    Header,
    Eyebrow,
    Title,
    Description,
    CreateButton,
    Summary,
    SummaryCard,
    SummaryIcon,
    SummaryLabel,
    SummaryValue,
    Toolbar,
    ToolbarInfo,
    FilterGroup,
    SearchWrapper,
    SearchInput,
    FilterSelect,
    TableCard,
    TableWrapper,
    Table,
    CaseNumber,
    CaseName,
    ClientInfo,
    Status,
    ActionGroup,
    ActionButton,
    TableFooter,
    EmptyState,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    CloseButton,
    Form,
    FormGrid,
    FormField,
    Label,
    Input,
    Select,
    TextArea,
    ModalActions,
    CancelButton,
    SaveButton,
    DetailGrid,
    DetailMain,
    DetailSide,
    DetailCard,
    DetailSectionTitle,
    DetailField,
    DetailLabel,
    DetailValue,
    DetailHeader,
    DetailNumber,
    DetailStatus,
    StageTimeline,
    StageItem,
    StageMarker,
    StageContent,
    StageName,
    StageDate,
    StrategyBox,
    DetailActions,
} from "../../../../styles/components/modules/collaborator/files.styles";

const PROCESS_STAGES = [
    "Admisión",
    "Notificación",
    "Etapa Probatoria",
    "Alegatos de Conclusión",
    "Sentencia",
    "Finalizado",
];

const PROCESS_TYPES = [
    "Civil",
    "Laboral",
    "Penal",
    "Comercial",
    "Administrativo",
    "Familia",
    "Constitucional",
];

const INITIAL_FILES = [
    {
        id: 1,
        docket_number: "11001-31-03-001-2026-00018-00",
        name: "Proceso de responsabilidad civil",
        client_name: "Constructora Andina S.A.S.",
        client_identification: "900123456-1",
        client_email: "contacto@constructora.com",
        client_phone: "3001234567",
        process_type: "Civil",
        court: "Juzgado Primero Civil del Circuito",
        city: "Bogotá",
        stage: "Etapa Probatoria",
        status: "Activo",
        start_date: "2026-08-12",
        legal_strategy:
            "Solicitar y practicar las pruebas documentales y testimoniales necesarias para acreditar el incumplimiento contractual y sustentar la responsabilidad de la parte demandada.",
        observations:
            "Pendiente consolidar los documentos aportados por el cliente.",
    },
    {
        id: 2,
        docket_number: "05001-31-05-002-2026-00015-00",
        name: "Proceso ejecutivo contractual",
        client_name: "Inversiones del Norte S.A.S.",
        client_identification: "901456789-2",
        client_email: "juridica@inversionesnorte.com",
        client_phone: "3104567890",
        process_type: "Comercial",
        court: "Juzgado Segundo Civil del Circuito",
        city: "Medellín",
        stage: "Alegatos de Conclusión",
        status: "Activo",
        start_date: "2026-06-20",
        legal_strategy:
            "Consolidar los argumentos jurídicos y probatorios para demostrar la exigibilidad de la obligación y solicitar que se profiera sentencia favorable.",
        observations: "Documentación probatoria revisada.",
    },
    {
        id: 3,
        docket_number: "11001-31-05-003-2026-00012-00",
        name: "Proceso de derecho laboral",
        client_name: "Carlos Ramírez",
        client_identification: "1023456789",
        client_email: "carlos@email.com",
        client_phone: "3209876543",
        process_type: "Laboral",
        court: "Juzgado Tercero Laboral del Circuito",
        city: "Bogotá",
        stage: "Notificación",
        status: "Pendiente",
        start_date: "2026-09-05",
        legal_strategy: "",
        observations: "",
    },
];

const EMPTY_FORM = {
    docket_number: "",
    name: "",
    client_name: "",
    client_identification: "",
    client_email: "",
    client_phone: "",
    process_type: "",
    court: "",
    city: "",
    stage: "Admisión",
    start_date: "",
    legal_strategy: "",
    observations: "",
};

const Files = () => {
    const [files, setFiles] = useState(INITIAL_FILES);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Todos");

    const [modalOpen, setModalOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);
    const [editingFile, setEditingFile] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM);

    const filteredFiles = useMemo(() => {
        const term = search.toLowerCase().trim();

        return files.filter((item) => {
            const matchesSearch = [
                item.docket_number,
                item.name,
                item.client_name,
                item.process_type,
                item.court,
            ].some((value) =>
                value?.toLowerCase().includes(term)
            );

            const matchesStatus =
                statusFilter === "Todos" ||
                item.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [files, search, statusFilter]);

    const activeCount = files.filter(
        (item) => item.status === "Activo"
    ).length;

    const pendingCount = files.filter(
        (item) => item.status === "Pendiente"
    ).length;

    const openCreateModal = () => {
        setEditingFile(null);
        setForm({
            ...EMPTY_FORM,
            start_date: new Date().toISOString().slice(0, 10),
        });
        setModalOpen(true);
    };

    const openEditModal = (item) => {
        setEditingFile(item);
        setForm({ ...item });
        setModalOpen(true);
    };

    const openDetails = (item) => {
        setSelectedFile(item);
        setDetailOpen(true);
    };

    const handleChange = (field, value) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            ...form,
            docket_number: form.docket_number.trim(),
            name: form.name.trim(),
            client_name: form.client_name.trim(),
            client_identification: form.client_identification.trim(),
            court: form.court.trim(),
            city: form.city.trim(),
        };

        if (
            !data.docket_number ||
            !data.name ||
            !data.client_name ||
            !data.client_identification ||
            !data.process_type ||
            !data.court
        ) return;

        if (editingFile) {
            setFiles((previous) =>
                previous.map((item) =>
                    item.id === editingFile.id
                        ? { ...item, ...data }
                        : item
                )
            );

            if (selectedFile?.id === editingFile.id) {
                setSelectedFile({ ...editingFile, ...data });
            }
        } else {
            setFiles((previous) => [
                ...previous,
                {
                    ...data,
                    id: Date.now(),
                    status: "Activo",
                },
            ]);
        }

        setModalOpen(false);
    };

    const updateCase = (field, value) => {
        const updated = {
            ...selectedFile,
            [field]: value,
        };

        setSelectedFile(updated);

        setFiles((previous) =>
            previous.map((item) =>
                item.id === updated.id ? updated : item
            )
        );
    };

    const handleStatusChange = (value) => {
        updateCase("status", value);
    };

    const handleStageChange = (value) => {
        updateCase("stage", value);
    };

    const closeDetails = () => {
        setDetailOpen(false);
        setSelectedFile(null);
    };

    const getStageIndex = (stage) =>
        PROCESS_STAGES.indexOf(stage);

    return (
        <Container>
            <Header>

                <CreateButton onClick={openCreateModal}>
                    <FiPlus />
                    Crear expediente
                </CreateButton>
            </Header>

            <Summary>
                <SummaryCard>
                    <SummaryIcon>
                        <FiFolder />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>Total de expedientes</SummaryLabel>
                        <SummaryValue>{files.length}</SummaryValue>
                    </div>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $success>
                        <FiCheck />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>Expedientes activos</SummaryLabel>
                        <SummaryValue>{activeCount}</SummaryValue>
                    </div>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $warning>
                        <FiClock />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>Pendientes de atención</SummaryLabel>
                        <SummaryValue>{pendingCount}</SummaryValue>
                    </div>
                </SummaryCard>
            </Summary>

            <TableCard>
                <Toolbar>
                    <ToolbarInfo>
                        <h2>Registro de expedientes</h2>
                        <p>
                            Consulta la información y evolución de cada proceso.
                        </p>
                    </ToolbarInfo>

                    <FilterGroup>
                        <SearchWrapper>
                            <FiSearch />
                            <SearchInput
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Buscar expediente, cliente o radicado..."
                            />
                        </SearchWrapper>

                        <FilterSelect
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                        >
                            <option value="Todos">Todos los estados</option>
                            <option value="Activo">Activos</option>
                            <option value="Pendiente">Pendientes</option>
                            <option value="Cerrado">Cerrados</option>
                        </FilterSelect>
                    </FilterGroup>
                </Toolbar>

                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <th>EXPEDIENTE / RADICADO</th>
                                <th>CLIENTE</th>
                                <th>TIPO DE PROCESO</th>
                                <th>ETAPA PROCESAL</th>
                                <th>ESTADO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredFiles.length > 0 ? (
                                filteredFiles.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <CaseNumber>
                                                {item.docket_number}
                                            </CaseNumber>
                                            <CaseName>{item.name}</CaseName>
                                        </td>

                                        <td>
                                            <ClientInfo>
                                                <FiUser />
                                                {item.client_name}
                                            </ClientInfo>
                                        </td>

                                        <td>{item.process_type}</td>

                                        <td>{item.stage}</td>

                                        <td>
                                            <Status
                                                $status={item.status}
                                            >
                                                {item.status}
                                            </Status>
                                        </td>

                                        <td>
                                            <ActionGroup>
                                                <ActionButton
                                                    title="Consultar expediente"
                                                    onClick={() =>
                                                        openDetails(item)
                                                    }
                                                >
                                                    <FiEye />
                                                </ActionButton>

                                                <ActionButton
                                                    title="Editar información"
                                                    onClick={() =>
                                                        openEditModal(item)
                                                    }
                                                >
                                                    <FiEdit2 />
                                                </ActionButton>
                                            </ActionGroup>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6}>
                                        <EmptyState>
                                            No se encontraron expedientes.
                                        </EmptyState>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </TableWrapper>

                <TableFooter>
                    Mostrando {filteredFiles.length} de {files.length} expedientes
                </TableFooter>
            </TableCard>

            {/* MODAL CREAR / EDITAR */}
            {modalOpen && (
                <ModalOverlay onClick={() => setModalOpen(false)}>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <div>
                                <ModalTitle>
                                    {editingFile
                                        ? "Editar expediente"
                                        : "Crear expediente"}
                                </ModalTitle>
                                <ModalDescription>
                                    Registra los datos generales del proceso
                                    y su información jurídica.
                                </ModalDescription>
                            </div>

                            <CloseButton
                                type="button"
                                onClick={() => setModalOpen(false)}
                            >
                                <FiX />
                            </CloseButton>
                        </ModalHeader>

                        <Form onSubmit={handleSubmit}>
                            <DetailSectionTitle>
                                <FiFolder /> Información del expediente
                            </DetailSectionTitle>

                            <FormGrid>
                                <FormField $full>
                                    <Label>Número de radicado</Label>
                                    <Input
                                        required
                                        value={form.docket_number}
                                        onChange={(e) =>
                                            handleChange(
                                                "docket_number",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Ej. 11001-31-03-001-2026-00018-00"
                                    />
                                </FormField>

                                <FormField $full>
                                    <Label>Nombre del expediente</Label>
                                    <Input
                                        required
                                        value={form.name}
                                        onChange={(e) =>
                                            handleChange("name", e.target.value)
                                        }
                                        placeholder="Descripción del proceso"
                                    />
                                </FormField>

                                <FormField>
                                    <Label>Tipo de proceso</Label>
                                    <Select
                                        required
                                        value={form.process_type}
                                        onChange={(e) =>
                                            handleChange(
                                                "process_type",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">Seleccionar</option>
                                        {PROCESS_TYPES.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </Select>
                                </FormField>

                                <FormField>
                                    <Label>Fecha de inicio</Label>
                                    <Input
                                        type="date"
                                        value={form.start_date}
                                        onChange={(e) =>
                                            handleChange(
                                                "start_date",
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormField>

                                <FormField $full>
                                    <Label>Juzgado</Label>
                                    <Input
                                        required
                                        value={form.court}
                                        onChange={(e) =>
                                            handleChange("court", e.target.value)
                                        }
                                        placeholder="Nombre del juzgado"
                                    />
                                </FormField>

                                <FormField>
                                    <Label>Ciudad</Label>
                                    <Input
                                        value={form.city}
                                        onChange={(e) =>
                                            handleChange("city", e.target.value)
                                        }
                                        placeholder="Ciudad"
                                    />
                                </FormField>
                            </FormGrid>

                            <DetailSectionTitle>
                                <FiUser /> Información del cliente
                            </DetailSectionTitle>

                            <FormGrid>
                                <FormField $full>
                                    <Label>Nombre o razón social</Label>
                                    <Input
                                        required
                                        value={form.client_name}
                                        onChange={(e) =>
                                            handleChange(
                                                "client_name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Nombre completo del cliente"
                                    />
                                </FormField>

                                <FormField>
                                    <Label>Identificación</Label>
                                    <Input
                                        required
                                        value={form.client_identification}
                                        onChange={(e) =>
                                            handleChange(
                                                "client_identification",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Número de documento / NIT"
                                    />
                                </FormField>

                                <FormField>
                                    <Label>Teléfono</Label>
                                    <Input
                                        value={form.client_phone}
                                        onChange={(e) =>
                                            handleChange(
                                                "client_phone",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Teléfono de contacto"
                                    />
                                </FormField>

                                <FormField $full>
                                    <Label>Correo electrónico</Label>
                                    <Input
                                        type="email"
                                        value={form.client_email}
                                        onChange={(e) =>
                                            handleChange(
                                                "client_email",
                                                e.target.value
                                            )
                                        }
                                        placeholder="correo@cliente.com"
                                    />
                                </FormField>
                            </FormGrid>

                            <DetailSectionTitle>
                                <FiScale /> Dirección jurídica inicial
                            </DetailSectionTitle>

                            <FormField>
                                <Label>Línea jurídica a seguir</Label>
                                <TextArea
                                    rows={4}
                                    value={form.legal_strategy}
                                    onChange={(e) =>
                                        handleChange(
                                            "legal_strategy",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Define la estrategia jurídica inicial del caso..."
                                />
                            </FormField>

                            <FormField>
                                <Label>Observaciones</Label>
                                <TextArea
                                    rows={3}
                                    value={form.observations}
                                    onChange={(e) =>
                                        handleChange(
                                            "observations",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Observaciones adicionales..."
                                />
                            </FormField>

                            <ModalActions>
                                <CancelButton
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancelar
                                </CancelButton>

                                <SaveButton type="submit">
                                    <FiCheck />
                                    {editingFile
                                        ? "Guardar cambios"
                                        : "Crear expediente"}
                                </SaveButton>
                            </ModalActions>
                        </Form>
                    </Modal>
                </ModalOverlay>
            )}

            {/* DETALLE Y GESTIÓN JURÍDICA */}
            {detailOpen && selectedFile && (
                <ModalOverlay onClick={closeDetails}>
                    <Modal $wide onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <div>
                                <Eyebrow>GESTIÓN PROCESAL</Eyebrow>
                                <ModalTitle>{selectedFile.name}</ModalTitle>
                                <DetailNumber>
                                    RADICADO: {selectedFile.docket_number}
                                </DetailNumber>
                            </div>

                            <CloseButton
                                type="button"
                                onClick={closeDetails}
                            >
                                <FiX />
                            </CloseButton>
                        </ModalHeader>

                        <DetailGrid>
                            <DetailMain>
                                <DetailCard>
                                    <DetailSectionTitle>
                                        <FiClipboard />
                                        Información del expediente
                                    </DetailSectionTitle>

                                    <FormGrid>
                                        <DetailField>
                                            <DetailLabel>Cliente</DetailLabel>
                                            <DetailValue>
                                                {selectedFile.client_name}
                                            </DetailValue>
                                        </DetailField>

                                        <DetailField>
                                            <DetailLabel>Identificación</DetailLabel>
                                            <DetailValue>
                                                {selectedFile.client_identification}
                                            </DetailValue>
                                        </DetailField>

                                        <DetailField>
                                            <DetailLabel>Tipo de proceso</DetailLabel>
                                            <DetailValue>
                                                {selectedFile.process_type}
                                            </DetailValue>
                                        </DetailField>

                                        <DetailField>
                                            <DetailLabel>Juzgado</DetailLabel>
                                            <DetailValue>
                                                {selectedFile.court}
                                            </DetailValue>
                                        </DetailField>

                                        <DetailField>
                                            <DetailLabel>Ciudad</DetailLabel>
                                            <DetailValue>
                                                {selectedFile.city || "No registrada"}
                                            </DetailValue>
                                        </DetailField>

                                        <DetailField>
                                            <DetailLabel>Fecha de inicio</DetailLabel>
                                            <DetailValue>
                                                {selectedFile.start_date || "No registrada"}
                                            </DetailValue>
                                        </DetailField>
                                    </FormGrid>
                                </DetailCard>

                                <DetailCard>
                                    <DetailSectionTitle>
                                        <FiScale />
                                        Línea jurídica a seguir
                                    </DetailSectionTitle>

                                    <StrategyBox>
                                        {selectedFile.legal_strategy ||
                                            "Todavía no se ha definido una línea jurídica para este expediente."}
                                    </StrategyBox>

                                    <TextArea
                                        rows={4}
                                        value={selectedFile.legal_strategy}
                                        onChange={(e) =>
                                            updateCase(
                                                "legal_strategy",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Registrar o actualizar la estrategia jurídica..."
                                    />

                                    <DetailActions>
                                        <SaveButton
                                            type="button"
                                            onClick={closeDetails}
                                        >
                                            <FiCheck />
                                            Finalizar revisión
                                        </SaveButton>
                                    </DetailActions>
                                </DetailCard>
                            </DetailMain>

                            <DetailSide>
                                <DetailCard>
                                    <DetailSectionTitle>
                                        <FiActivity />
                                        Estado del caso
                                    </DetailSectionTitle>

                                    <DetailLabel>Estado general</DetailLabel>

                                    <Select
                                        value={selectedFile.status}
                                        onChange={(e) =>
                                            handleStatusChange(e.target.value)
                                        }
                                    >
                                        <option value="Activo">Activo</option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="Cerrado">Cerrado</option>
                                    </Select>

                                    <DetailLabel>
                                        Etapa procesal actual
                                    </DetailLabel>

                                    <Select
                                        value={selectedFile.stage}
                                        onChange={(e) =>
                                            handleStageChange(e.target.value)
                                        }
                                    >
                                        {PROCESS_STAGES.map((stage) => (
                                            <option key={stage} value={stage}>
                                                {stage}
                                            </option>
                                        ))}
                                    </Select>
                                </DetailCard>

                                <DetailCard>
                                    <DetailSectionTitle>
                                        <FiActivity />
                                        Etapas del proceso
                                    </DetailSectionTitle>

                                    <StageTimeline>
                                        {PROCESS_STAGES.map((stage, index) => {
                                            const currentIndex = getStageIndex(
                                                selectedFile.stage
                                            );

                                            const completed =
                                                currentIndex >= 0 &&
                                                index < currentIndex;

                                            const current =
                                                index === currentIndex;

                                            return (
                                                <StageItem key={stage}>
                                                    <StageMarker
                                                        $completed={completed}
                                                        $current={current}
                                                    >
                                                        {completed ? (
                                                            <FiCheck />
                                                        ) : null}
                                                    </StageMarker>

                                                    <StageContent>
                                                        <StageName
                                                            $active={current}
                                                        >
                                                            {stage}
                                                        </StageName>

                                                        {current && (
                                                            <StageDate>
                                                                Etapa actual
                                                            </StageDate>
                                                        )}
                                                    </StageContent>
                                                </StageItem>
                                            );
                                        })}
                                    </StageTimeline>
                                </DetailCard>
                            </DetailSide>
                        </DetailGrid>
                    </Modal>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default Files;
