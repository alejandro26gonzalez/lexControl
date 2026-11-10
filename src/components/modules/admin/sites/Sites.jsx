import { useMemo, useState, useEffect } from "react";

import {
    FiMapPin,
    FiPlus,
    FiSearch,
    FiEdit2,
    FiPower,
    FiX,
    FiCheck,
} from "react-icons/fi";

import { FaLandmark as FiLandmark } from "react-icons/fa";

import {
    Container,
    Header,
    CreateButton,
    Tabs,
    Tab,
    TabCount,
    Summary,
    SummaryCard,
    SummaryIcon,
    SummaryLabel,
    SummaryValue,
    ContentCard,
    Toolbar,
    SectionTitle,
    SectionDescription,
    SearchWrapper,
    SearchInput,
    TableWrapper,
    Table,
    NameCell,
    Status,
    Actions,
    ActionButton,
    EmptyState,
    TableFooter,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    CloseButton,
    Form,
    FormField,
    Label,
    Input,
    ModalActions,
    CancelButton,
    SaveButton,
} from "../../../../styles/components/modules/admin/sites.styles";

import {
    getCourts,
    createCourt,
    updateCourt,
    toggleCourtStatus
} from "../../../../modules/admin/sites/courts.service";

import {
    getSites,
    createSite,
    updateSite,
    toggleSiteStatus
} from "../../../../modules/admin/sites/sites.service";

const Sites = () => {
    const [activeTab, setActiveTab] = useState("sites");
    const [sites, setSites] = useState([]);
    const [courts, setCourts] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const [form, setForm] = useState({
        name: "",
        city: "",
        address: "",
    });

    const isSites = activeTab === "sites";
    const currentData = isSites ? sites : courts;

    const filteredData = useMemo(() => {
        const term = search.toLowerCase().trim();

        if (!term) return currentData;

        return currentData.filter((item) =>
            [item.name, item.city, item.address]
                .filter(Boolean)
                .some((value) => value.toLowerCase().includes(term))
        );
    }, [currentData, search]);

    const activeCount = currentData.filter(
        (item) => item.is_active
    ).length;

    //cargar locations
    const loadLocations = async () => {
        try {
            setLoading(true);
            setError(null);

            const [sitesResponse, courtsResponse] = await Promise.all([
                getSites(),
                getCourts(),
            ]);

            setSites(sitesResponse.sites || []);
            setCourts(courtsResponse.courts || []);

        } catch (error) {
            console.error("Error cargando ubicaciones:", error);
            setError(error.message || "No fue posible cargar los registros.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLocations();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = form.name.trim();
        const city = form.city.trim();
        const address = form.address.trim();

        if (!name || !city || (isSites && !address)) return;

        const payload = {
            name,
            city,
            ...(isSites && { address }),
        };

        try {
            setSaving(true);
            setError(null);

            if (isSites) {
                if (editingItem) {
                    await updateSite(editingItem.id, payload);
                } else {
                    await createSite(payload);
                }
            } else {
                if (editingItem) {
                    await updateCourt(editingItem.id, payload);
                } else {
                    await createCourt(payload);
                }
            }

            await loadLocations();
            setModalOpen(false);

        } catch (error) {
            console.error("Error guardando registro:", error);
            setError(error.message || "No fue posible guardar el registro.");
        } finally {
            setSaving(false);
        }
    };

    const handleToggleStatus = async (id) => {
        const currentData = isSites ? sites : courts;
        const item = currentData.find((item) => item.id === id);

        if (!item) return;

        try {
            setError(null);

            if (isSites) {
                await toggleSiteStatus(id, !item.is_active);
            } else {
                await toggleCourtStatus(id, !item.is_active);
            }

            await loadLocations();

        } catch (error) {
            console.error("Error cambiando estado:", error);
            setError(error.message || "No fue posible cambiar el estado.");
        }
    };


    // ===================================================

    const openCreateModal = () => {
        setEditingItem(null);
        setForm({ name: "", city: "", address: "" });
        setModalOpen(true);
    };

    const openEditModal = (item) => {
        setEditingItem(item);
        setForm({
            name: item.name,
            city: item.city,
            address: item.address || "",
        });
        setModalOpen(true);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearch("");
    };

    return (
        <Container>
            <Header>

                <CreateButton onClick={openCreateModal}>
                    <FiPlus />
                    {isSites ? "Nueva sede" : "Nuevo juzgado"}
                </CreateButton>
            </Header>

            <Tabs>
                <Tab
                    $active={isSites}
                    onClick={() => handleTabChange("sites")}
                >
                    <FiMapPin />
                    Sedes
                    <TabCount>{sites.length}</TabCount>
                </Tab>

                <Tab
                    $active={!isSites}
                    onClick={() => handleTabChange("courts")}
                >
                    <FiLandmark />
                    Juzgados
                    <TabCount>{courts.length}</TabCount>
                </Tab>
            </Tabs>

            <Summary>
                <SummaryCard>
                    <SummaryIcon>
                        {isSites ? <FiMapPin /> : <FiLandmark />}
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>
                            Total de {isSites ? "sedes" : "juzgados"}
                        </SummaryLabel>
                        <SummaryValue>{currentData.length}</SummaryValue>
                    </div>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $success>
                        <FiCheck />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>Registros activos</SummaryLabel>
                        <SummaryValue>{activeCount}</SummaryValue>
                    </div>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $warning>
                        <FiPower />
                    </SummaryIcon>
                    <div>
                        <SummaryLabel>Registros inactivos</SummaryLabel>
                        <SummaryValue>
                            {currentData.length - activeCount}
                        </SummaryValue>
                    </div>
                </SummaryCard>
            </Summary>

            <ContentCard>
                <Toolbar>
                    <div>
                        <SectionTitle>
                            {isSites ? "Sedes registradas" : "Juzgados registrados"}
                        </SectionTitle>
                        <SectionDescription>
                            {isSites
                                ? "Consulta y administra las ubicaciones del sistema."
                                : "Administra los juzgados disponibles para los procesos."}
                        </SectionDescription>
                    </div>

                    <SearchWrapper>
                        <FiSearch />
                        <SearchInput
                            placeholder={
                                isSites
                                    ? "Buscar sede o ciudad..."
                                    : "Buscar juzgado o ciudad..."
                            }
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </SearchWrapper>
                </Toolbar>

                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <th>{isSites ? "SEDE" : "JUZGADO"}</th>
                                <th>CIUDAD</th>
                                {isSites && <th>DIRECCIÓN</th>}
                                <th>ESTADO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>

                        <tbody>


                            {loading ? (
                                <tr>
                                    <td colSpan={isSites ? 5 : 4}>
                                        <EmptyState>Cargando registros...</EmptyState>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={isSites ? 5 : 4}>
                                        <EmptyState>{error}</EmptyState>
                                    </td>
                                </tr>
                            ) : filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <NameCell>
                                                {isSites ? <FiMapPin /> : <FiLandmark />}
                                                {item.name}
                                            </NameCell>
                                        </td>

                                        <td>{item.city}</td>

                                        {isSites && <td>{item.address}</td>}

                                        <td>
                                            <Status $active={item.is_active}>
                                                {item.is_active ? "Activo" : "Inactivo"}
                                            </Status>
                                        </td>

                                        <td>
                                            <Actions>
                                                <ActionButton
                                                    title="Editar"
                                                    onClick={() => openEditModal(item)}
                                                >
                                                    <FiEdit2 />
                                                </ActionButton>

                                                <ActionButton
                                                    title={item.is_active ? "Inactivar" : "Activar"}
                                                    onClick={() => handleToggleStatus(item.id)}
                                                >
                                                    <FiPower />
                                                </ActionButton>
                                            </Actions>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={isSites ? 5 : 4}>
                                        <EmptyState>
                                            No se encontraron registros.
                                        </EmptyState>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </TableWrapper>

                <TableFooter>
                    Mostrando {filteredData.length} de {currentData.length} registros
                </TableFooter>
            </ContentCard>

            {modalOpen && (
                <ModalOverlay onClick={() => setModalOpen(false)}>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <div>
                                <ModalTitle>
                                    {editingItem ? "Editar" : "Crear"}{" "}
                                    {isSites ? "sede" : "juzgado"}
                                </ModalTitle>
                                <ModalDescription>
                                    Completa la información del registro.
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
                            <FormField>
                                <Label>
                                    {isSites ? "Nombre de la sede" : "Nombre del juzgado"}
                                </Label>
                                <Input
                                    autoFocus
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                    placeholder={
                                        isSites
                                            ? "Ej. Sede Principal"
                                            : "Ej. Juzgado Primero Civil"
                                    }
                                    required
                                />
                            </FormField>

                            <FormField>
                                <Label>Ciudad</Label>
                                <Input
                                    value={form.city}
                                    onChange={(e) =>
                                        setForm({ ...form, city: e.target.value })
                                    }
                                    placeholder="Ej. Bogotá"
                                    required
                                />
                            </FormField>

                            {isSites && (
                                <FormField>
                                    <Label>Dirección</Label>
                                    <Input
                                        value={form.address}
                                        onChange={(e) =>
                                            setForm({ ...form, address: e.target.value })
                                        }
                                        placeholder="Dirección de la sede"
                                        required
                                    />
                                </FormField>
                            )}

                            <ModalActions>
                                <CancelButton
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancelar
                                </CancelButton>

                                <SaveButton type="submit" disabled={saving}>
                                    <FiCheck />
                                    {saving
                                        ? "Guardando..."
                                        : editingItem
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

export default Sites;
