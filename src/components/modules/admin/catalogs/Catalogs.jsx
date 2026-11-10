
import { useMemo, useState, useEffect } from "react";
import {
    FiUsers,
    FiPlus,
    FiSearch,
    FiEdit2,
    FiX,
    FiLinkedin,
    FiExternalLink,
    FiBriefcase,
    FiBookOpen,
    FiImage,
    FiTrash2,
} from "react-icons/fi";

import { FaBalanceScale as FiScale } from "react-icons/fa";

import {
    getProfessionals,
    createProfessional,
    updateProfessional,
    toggleProfessionalStatus
} from "../../../../modules/admin/catalogs/professionals.service";

import {
    getSpecialties,
    createSpecialty,
    updateSpecialty,
    toggleSpecialtyStatus
} from "../../../../modules/admin/catalogs/specialties.service";

import {
    Container,
    Header,
    Eyebrow,
    CreateButton,
    Tabs,
    Tab,
    TabCount,
    Summary,
    SummaryCard,
    SummaryIcon,
    SummaryLabel,
    SummaryValue,
    Toolbar,
    SearchWrapper,
    SearchInput,
    Grid,
    ProfessionalCard,
    ProfessionalImage,
    ProfessionalContent,
    ProfessionalHeader,
    ProfessionalName,
    ProfessionalPosition,
    SpecialtyTag,
    CardDescription,
    CardFooter,
    CardLink,
    SpecialtyCard,
    SpecialtyCardHeader,
    SpecialtyTitle,
    SpecialtyDescription,
    SpecialtyAreaList,
    SpecialtyArea,
    SpecialtyAreaName,
    SpecialtyAreaDescription,
    CardActions,
    IconButton,
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
    TextArea,
    ModalActions,
    CancelButton,
    SaveButton,
    DynamicSection,
    DynamicHeader,
    DynamicTitle,
    DynamicItem,
    RemoveButton,
    AddButton,
    ImagePreview,
} from "../../../../styles/components/modules/admin/catalog.styles";

const EMPTY_PROFESSIONAL = {
    name: "",
    last_name: "",
    position: "",
    specialty: "",
    linkedin_url: "",
    profile_image_url: "",
    profile: "",
    practice_areas: [""],
    experience: "",
    education: [{ degree: "", institution: "" }],
};

const EMPTY_SPECIALTY = {
    name: "",
    description: "",
    areas: [{ name: "", description: "" }],
};

const Catalogs = () => {
    const [activeTab, setActiveTab] = useState("professionals");

    const [professionals, setProfessionals] = useState([]);

    const [specialties, setSpecialties] = useState([]);

    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);


    // Estados de carga
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [professionalForm, setProfessionalForm] = useState(
        EMPTY_PROFESSIONAL
    );

    const [specialtyForm, setSpecialtyForm] = useState(
        EMPTY_SPECIALTY
    );

    const isProfessional = activeTab === "professionals";

    const currentData = isProfessional ? professionals : specialties;

    const openCreateModal = () => {
        setEditingItem(null);

        setProfessionalForm({
            ...EMPTY_PROFESSIONAL,
            practice_areas: [""],
            education: [{ degree: "", institution: "" }],
        });

        setSpecialtyForm({
            ...EMPTY_SPECIALTY,
            areas: [{ name: "", description: "" }],
        });

        setModalOpen(true);
    };

    const openEditModal = (item) => {
        setEditingItem(item);

        if (isProfessional) {
            setProfessionalForm({
                ...item,
                name: item.name || "",
                last_name: item.last_name || "",
                position: item.position || "",
                specialty: item.specialty || "",
                profile_image_url: item.profile_image_url || "",
                linkedin_url: item.linkedin_url || "",
                profile: item.profile || "",
                experience: item.experience || "",
                practice_areas: item.practice_areas || [""],
                education: item.education || [{ degree: "", institution: "" }],
            });
        } else {
            setSpecialtyForm({
                ...item,
                name: item.name || "",
                description: item.description || "",
                areas: item.areas || [{ name: "", description: "" }],
            });
        }

        setModalOpen(true);
    };

    const handleProfessionalChange = (field, value) => {
        setProfessionalForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSpecialtyChange = (field, value) => {
        setSpecialtyForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const updateProfessionalArray = (field, index, key, value) => {
        setProfessionalForm((previous) => ({
            ...previous,
            [field]: previous[field].map((item, i) =>
                i === index
                    ? typeof item === "string"
                        ? value
                        : { ...item, [key]: value }
                    : item
            ),
        }));
    };

    const updateSpecialtyArea = (index, field, value) => {
        setSpecialtyForm((previous) => ({
            ...previous,
            areas: previous.areas.map((area, i) =>
                i === index
                    ? { ...area, [field]: value }
                    : area
            ),
        }));
    };

    const addProfessionalItem = (field, item) => {
        setProfessionalForm((previous) => ({
            ...previous,
            [field]: [...previous[field], item],
        }));
    };

    const removeProfessionalItem = (field, index) => {
        setProfessionalForm((previous) => ({
            ...previous,
            [field]: previous[field].filter((_, i) => i !== index),
        }));
    };

    const addSpecialtyArea = () => {
        setSpecialtyForm((previous) => ({
            ...previous,
            areas: [
                ...previous.areas,
                { name: "", description: "" },
            ],
        }));
    };

    const removeSpecialtyArea = (index) => {
        setSpecialtyForm((previous) => ({
            ...previous,
            areas: previous.areas.filter((_, i) => i !== index),
        }));
    };


    // ==================================================================
    //traer los datos y montarlos apenas se renderiza
    const loadCatalogs = async () => {

        try {

            setLoading(true);
            setError(null);

            const [professionalsResponse, specialtiesResponse] =
                await Promise.all([
                    getProfessionals(),
                    getSpecialties()
                ]);

            setProfessionals(
                professionalsResponse.professionals || []
            );

            setSpecialties(
                specialtiesResponse.specialties || []
            );

        } catch (error) {

            console.error("Error cargando catálogos:", error);

            setError(
                error.message || "No fue posible cargar los catálogos."
            );

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        loadCatalogs();
    }, []);

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "¿Estás seguro de desactivar este registro?"
        );

        if (!confirmed) return;

        try {

            setError(null);

            if (isProfessional) {

                await toggleProfessionalStatus(id, false);

            } else {

                await toggleSpecialtyStatus(id, false);

            }

            await loadCatalogs();

        } catch (error) {

            console.error("Error desactivando registro:", error);

            setError(
                error.message || "No fue posible desactivar el registro."
            );

        }
    };

    const handleEdit = (item) => {
        openEditModal(item);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(null);

            const data = isProfessional
                ? {
                    ...professionalForm,
                    name: professionalForm.name.trim(),
                    last_name: professionalForm.last_name.trim(),
                    position: professionalForm.position.trim(),
                    specialty: professionalForm.specialty.trim(),
                    profile_image_url: professionalForm.profile_image_url.trim(),
                    linkedin_url: professionalForm.linkedin_url.trim(),
                    profile: professionalForm.profile.trim(),
                    experience: professionalForm.experience.trim(),
                    practice_areas: professionalForm.practice_areas
                        .map((area) => area.trim())
                        .filter(Boolean),
                    education: professionalForm.education.filter(
                        (item) =>
                            item.degree.trim() &&
                            item.institution.trim()
                    ),
                }
                : {
                    ...specialtyForm,
                    name: specialtyForm.name.trim(),
                    description: specialtyForm.description.trim(),
                    areas: specialtyForm.areas
                        .filter(
                            (area) =>
                                area.name.trim() &&
                                area.description.trim()
                        )
                        .map((area) => ({
                            name: area.name.trim(),
                            description: area.description.trim(),
                        })),
                };

            if (!data.name) {
                setError("El nombre es obligatorio.");
                return;
            }

            if (isProfessional && !data.last_name) {
                setError("El apellido es obligatorio.");
                return;
            }

            if (editingItem) {

                if (isProfessional) {
                    await updateProfessional(editingItem.id, data);
                } else {
                    await updateSpecialty(editingItem.id, data);
                }

            } else {

                if (isProfessional) {
                    await createProfessional(data);
                } else {
                    await createSpecialty(data);
                }

            }

            await loadCatalogs();

            setModalOpen(false);
            setEditingItem(null);

        } catch (error) {

            console.error("Error guardando registro:", error);

            setError(
                error.message || "No fue posible guardar los cambios."
            );

        }
    };





    const filteredData = useMemo(() => {

        const term = search.toLowerCase().trim();

        if (!term) return currentData;

        return currentData.filter((item) => {

            const searchable = isProfessional
                ? [
                    item.name,
                    item.last_name,
                    item.position,
                    item.specialty,
                    item.profile,
                    ...(item.practice_areas || [])
                ]
                : [
                    item.name,
                    item.description,
                    ...(item.areas || []).map((area) => area.name)
                ];

            return searchable
                .filter(Boolean)
                .some((value) =>
                    String(value).toLowerCase().includes(term)
                );
        });

    }, [currentData, isProfessional, search]);


    return (
        <Container>
            <Header>

                <CreateButton onClick={openCreateModal}>
                    <FiPlus />
                    {isProfessional
                        ? "Nuevo profesional"
                        : "Nueva especialidad"}
                </CreateButton>
            </Header>

            <Tabs>
                <Tab
                    $active={isProfessional}
                    onClick={() => {
                        setActiveTab("professionals");
                        setSearch("");
                    }}
                >
                    <FiUsers />
                    Profesionales
                    <TabCount>{professionals.length}</TabCount>
                </Tab>

                <Tab
                    $active={!isProfessional}
                    onClick={() => {
                        setActiveTab("specialties");
                        setSearch("");
                    }}
                >
                    <FiScale />
                    Especialidades
                    <TabCount>{specialties.length}</TabCount>
                </Tab>
            </Tabs>

            <Summary>
                <SummaryCard>
                    <SummaryIcon>
                        {isProfessional ? <FiUsers /> : <FiScale />}
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>
                            {isProfessional
                                ? "Profesionales registrados"
                                : "Especialidades registradas"}
                        </SummaryLabel>
                        <SummaryValue>{currentData.length}</SummaryValue>
                    </div>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $success>
                        <FiBriefcase />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>
                            {isProfessional
                                ? "Áreas de práctica"
                                : "Áreas de especialización"}
                        </SummaryLabel>
                        <SummaryValue>
                            {isProfessional
                                ? professionals.reduce(
                                    (total, item) =>
                                        total + item.practice_areas.length,
                                    0
                                )
                                : specialties.reduce(
                                    (total, item) =>
                                        total + item.areas.length,
                                    0
                                )}
                        </SummaryValue>
                    </div>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $warning>
                        <FiBookOpen />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>
                            {isProfessional
                                ? "Formaciones registradas"
                                : "Descripciones registradas"}
                        </SummaryLabel>
                        <SummaryValue>
                            {isProfessional
                                ? professionals.reduce(
                                    (total, item) =>
                                        total + item.education.length,
                                    0
                                )
                                : specialties.filter(
                                    (item) => item.description
                                ).length}
                        </SummaryValue>
                    </div>
                </SummaryCard>
            </Summary>

            <Toolbar>
                <div>
                    <h2>
                        {isProfessional
                            ? "Directorio profesional"
                            : "Especialidades jurídicas"}
                    </h2>
                    <p>
                        {isProfessional
                            ? "Administra la información pública de los profesionales."
                            : "Administra las especialidades y sus áreas de servicio."}
                    </p>
                </div>

                <SearchWrapper>
                    <FiSearch />
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={
                            isProfessional
                                ? "Buscar profesional..."
                                : "Buscar especialidad..."
                        }
                    />
                </SearchWrapper>
            </Toolbar>

            {loading ? (

                <EmptyState>
                    Cargando información del catálogo...
                </EmptyState>

            ) : error ? (

                <EmptyState>
                    <p>{error}</p>

                    <button
                        type="button"
                        onClick={loadCatalogs}
                    >
                        Reintentar
                    </button>
                </EmptyState>

            ) : filteredData.length === 0 ? (
                <EmptyState>
                    No se encontraron registros.
                </EmptyState>
            ) : (
                <Grid>
                    {isProfessional
                        ? filteredData.map((person) => (
                            <ProfessionalCard key={person.id}>
                                {person.profile_image_url  ? (
                                    <ProfessionalImage>
                                        {person.profile_image_url ? (
                                            <img
                                                src={person.profile_image_url}
                                                alt={`${person.name} ${person.last_name}`}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <FiImage />
                                        )}
                                    </ProfessionalImage>
                                ) : (
                                    <ProfessionalImage $placeholder>
                                        <FiImage />
                                    </ProfessionalImage>
                                )}

                                <ProfessionalContent>
                                    <ProfessionalHeader>
                                        <div>
                                            <ProfessionalName>
                                                {person.name} {person.last_name}
                                            </ProfessionalName>
                                            <ProfessionalPosition>
                                                {person.position}
                                            </ProfessionalPosition>
                                        </div>

                                        <CardActions>
                                            <IconButton
                                                title="Editar"
                                                onClick={() =>
                                                    handleEdit(person)
                                                }
                                            >
                                                <FiEdit2 />
                                            </IconButton>
                                            <IconButton
                                                title="Eliminar"
                                                $danger
                                                onClick={() =>
                                                    handleDelete(person.id)
                                                }
                                            >
                                                <FiTrash2 />
                                            </IconButton>
                                        </CardActions>
                                    </ProfessionalHeader>

                                    <SpecialtyTag>
                                        {person.specialty}
                                    </SpecialtyTag>

                                    <CardDescription>
                                        {person.profile}
                                    </CardDescription>

                                    <CardFooter>
                                        <CardLink
                                            href={person.linkedin_url || undefined}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FiLinkedin />
                                            LinkedIn
                                            <FiExternalLink />
                                        </CardLink>

                                        <span>
                                            {person.practice_areas.length} áreas
                                            de práctica
                                        </span>
                                    </CardFooter>
                                </ProfessionalContent>
                            </ProfessionalCard>
                        ))
                        : filteredData.map((specialty) => (
                            <SpecialtyCard key={specialty.id}>
                                <SpecialtyCardHeader>
                                    <div>
                                        <Eyebrow>ESPECIALIDAD JURÍDICA</Eyebrow>
                                        <SpecialtyTitle>
                                            {specialty.name}
                                        </SpecialtyTitle>
                                    </div>

                                    <CardActions>
                                        <IconButton
                                            title="Editar"
                                            onClick={() =>
                                                handleEdit(specialty)
                                            }
                                        >
                                            <FiEdit2 />
                                        </IconButton>
                                        <IconButton
                                            title="Eliminar"
                                            $danger
                                            onClick={() =>
                                                handleDelete(specialty.id)
                                            }
                                        >
                                            <FiTrash2 />
                                        </IconButton>
                                    </CardActions>
                                </SpecialtyCardHeader>

                                <SpecialtyDescription>
                                    {specialty.description}
                                </SpecialtyDescription>

                                <DynamicTitle>
                                    Áreas de especialización
                                </DynamicTitle>

                                <SpecialtyAreaList>
                                    {specialty.areas.map((area, index) => (
                                        <SpecialtyArea key={index}>
                                            <SpecialtyAreaName>
                                                {area.name}
                                            </SpecialtyAreaName>
                                            <SpecialtyAreaDescription>
                                                {area.description}
                                            </SpecialtyAreaDescription>
                                        </SpecialtyArea>
                                    ))}
                                </SpecialtyAreaList>
                            </SpecialtyCard>
                        ))}
                </Grid>
            )}

            {modalOpen && (
                <ModalOverlay onClick={() => setModalOpen(false)}>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <div>
                                <ModalTitle>
                                    {editingItem ? "Editar" : "Crear"}{" "}
                                    {isProfessional
                                        ? "profesional"
                                        : "especialidad"}
                                </ModalTitle>
                                <ModalDescription>
                                    Completa los datos del catálogo.
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
                            {isProfessional ? (
                                <>
                                    <FormGrid>
                                        <FormField>
                                            <Label>Nombre</Label>
                                            <Input
                                                type="text"
                                                value={professionalForm.name}
                                                onChange={(e) =>
                                                    setProfessionalForm({
                                                        ...professionalForm,
                                                        name: e.target.value,
                                                    })
                                                }
                                                placeholder="Nombre del profesional"
                                                required
                                            />
                                        </FormField>

                                        <FormField>
                                            <Label>Apellido</Label>
                                            <Input
                                                type="text"
                                                value={professionalForm.last_name}
                                                onChange={(e) =>
                                                    setProfessionalForm({
                                                        ...professionalForm,
                                                        last_name: e.target.value,
                                                    })
                                                }
                                                placeholder="Apellido del profesional"
                                                required
                                            />
                                        </FormField>

                                        <FormField>
                                            <Label>Cargo o posición</Label>
                                            <Input
                                                value={professionalForm.position}
                                                onChange={(e) =>
                                                    handleProfessionalChange(
                                                        "position",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Ej. Socia"
                                            />
                                        </FormField>

                                        <FormField $full>
                                            <Label>Especialidad principal</Label>
                                            <Input
                                                value={professionalForm.specialty}
                                                onChange={(e) =>
                                                    handleProfessionalChange(
                                                        "specialty",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Ej. Derecho Civil y Contratos"
                                            />
                                        </FormField>

                                        <FormField $full>
                                            <Label>URL de imagen de perfil</Label>
                                            <Input
                                                value={professionalForm.image_url}
                                                onChange={(e) =>
                                                    handleProfessionalChange(
                                                        "image_url",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="https://..."
                                            />
                                            {professionalForm.image_url && (
                                                <ImagePreview
                                                    src={professionalForm.image_url}
                                                    alt="Vista previa"
                                                />
                                            )}
                                        </FormField>

                                        <FormField $full>
                                            <Label>LinkedIn</Label>
                                            <Input
                                                type="url"
                                                value={professionalForm.linkedin_url}
                                                onChange={(e) =>
                                                    handleProfessionalChange(
                                                        "linkedin_url",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="https://www.linkedin.com/in/..."
                                            />
                                        </FormField>

                                        <FormField $full>
                                            <Label>Perfil profesional</Label>
                                            <TextArea
                                                rows={4}
                                                value={professionalForm.profile}
                                                onChange={(e) =>
                                                    handleProfessionalChange(
                                                        "profile",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Descripción profesional..."
                                            />
                                        </FormField>

                                        <FormField $full>
                                            <Label>Experiencia</Label>
                                            <TextArea
                                                rows={3}
                                                value={professionalForm.experience}
                                                onChange={(e) =>
                                                    handleProfessionalChange(
                                                        "experience",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Trayectoria y experiencia..."
                                            />
                                        </FormField>
                                    </FormGrid>

                                    <DynamicSection>
                                        <DynamicHeader>
                                            <DynamicTitle>
                                                Áreas de práctica
                                            </DynamicTitle>
                                            <AddButton
                                                type="button"
                                                onClick={() =>
                                                    addProfessionalItem(
                                                        "practice_areas",
                                                        ""
                                                    )
                                                }
                                            >
                                                <FiPlus /> Agregar
                                            </AddButton>
                                        </DynamicHeader>

                                        {professionalForm.practice_areas.map(
                                            (area, index) => (
                                                <DynamicItem key={index}>
                                                    <Input
                                                        value={area}
                                                        onChange={(e) =>
                                                            updateProfessionalArray(
                                                                "practice_areas",
                                                                index,
                                                                null,
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Nombre del área"
                                                    />
                                                    <RemoveButton
                                                        type="button"
                                                        onClick={() =>
                                                            removeProfessionalItem(
                                                                "practice_areas",
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <FiTrash2 />
                                                    </RemoveButton>
                                                </DynamicItem>
                                            )
                                        )}
                                    </DynamicSection>

                                    <DynamicSection>
                                        <DynamicHeader>
                                            <DynamicTitle>
                                                Formación académica
                                            </DynamicTitle>
                                            <AddButton
                                                type="button"
                                                onClick={() =>
                                                    addProfessionalItem(
                                                        "education",
                                                        {
                                                            degree: "",
                                                            institution: "",
                                                        }
                                                    )
                                                }
                                            >
                                                <FiPlus /> Agregar
                                            </AddButton>
                                        </DynamicHeader>

                                        {professionalForm.education.map(
                                            (item, index) => (
                                                <DynamicItem
                                                    key={index}
                                                    $column
                                                >
                                                    <Input
                                                        value={item.degree}
                                                        onChange={(e) =>
                                                            updateProfessionalArray(
                                                                "education",
                                                                index,
                                                                "degree",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Título académico"
                                                    />
                                                    <Input
                                                        value={item.institution}
                                                        onChange={(e) =>
                                                            updateProfessionalArray(
                                                                "education",
                                                                index,
                                                                "institution",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Institución educativa"
                                                    />
                                                    <RemoveButton
                                                        type="button"
                                                        onClick={() =>
                                                            removeProfessionalItem(
                                                                "education",
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <FiTrash2 />
                                                    </RemoveButton>
                                                </DynamicItem>
                                            )
                                        )}
                                    </DynamicSection>
                                </>
                            ) : (
                                <>
                                    <FormField>
                                        <Label>Nombre de la especialidad</Label>
                                        <Input
                                            required
                                            value={specialtyForm.name}
                                            onChange={(e) =>
                                                handleSpecialtyChange(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Ej. Derecho Corporativo y Empresarial"
                                        />
                                    </FormField>

                                    <FormField>
                                        <Label>Descripción general</Label>
                                        <TextArea
                                            rows={4}
                                            value={specialtyForm.description}
                                            onChange={(e) =>
                                                handleSpecialtyChange(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Descripción de la especialidad..."
                                        />
                                    </FormField>

                                    <DynamicSection>
                                        <DynamicHeader>
                                            <DynamicTitle>
                                                Áreas de especialización
                                            </DynamicTitle>
                                            <AddButton
                                                type="button"
                                                onClick={addSpecialtyArea}
                                            >
                                                <FiPlus /> Agregar área
                                            </AddButton>
                                        </DynamicHeader>

                                        {specialtyForm.areas.map(
                                            (area, index) => (
                                                <DynamicItem
                                                    key={index}
                                                    $column
                                                >
                                                    <Input
                                                        value={area.name}
                                                        onChange={(e) =>
                                                            updateSpecialtyArea(
                                                                index,
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Nombre del área"
                                                    />
                                                    <TextArea
                                                        rows={3}
                                                        value={area.description}
                                                        onChange={(e) =>
                                                            updateSpecialtyArea(
                                                                index,
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Descripción del área..."
                                                    />
                                                    <RemoveButton
                                                        type="button"
                                                        onClick={() =>
                                                            removeSpecialtyArea(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <FiTrash2 />
                                                    </RemoveButton>
                                                </DynamicItem>
                                            )
                                        )}
                                    </DynamicSection>
                                </>
                            )}

                            <ModalActions>
                                <CancelButton
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancelar
                                </CancelButton>

                                <SaveButton type="submit">
                                    <FiPlus />
                                    {editingItem
                                        ? "Guardar cambios"
                                        : "Crear registro"}
                                </SaveButton>
                            </ModalActions>
                        </Form>
                    </Modal>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default Catalogs;
