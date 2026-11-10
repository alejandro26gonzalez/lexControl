
import { useMemo, useRef, useState } from "react";
import {
FiUploadCloud,
FiFileText,
FiFolder,
FiSearch,
FiFilter,
FiDownload,
FiEye,
FiTrash2,
FiLock,
FiGlobe,
FiPlus,
FiX,
FiCheck,
FiFile,
} from "react-icons/fi";

import * as S from "../../../../styles/components/modules/collaborator/repo.styles";

const DOCUMENT_TYPES = [
{ value: "complex_draft", label: "Demanda o recurso complejo" },
{ value: "client_support", label: "Soporte del cliente" },
{ value: "court_order", label: "Auto del juzgado" },
{ value: "simple_draft", label: "Borrador simple de memorial" },
];

const INITIAL_DOCUMENTS = [
{
    id: 1,
    name: "Demanda de responsabilidad civil.pdf",
    type: "complex_draft",
    caseNumber: "11001-31-03-001-2025-00124",
    caseName: "Responsabilidad civil contractual",
    date: "2026-11-02",
    size: "2.4 MB",
    visibility: "internal",
    uploadedBy: "Abogado responsable",
},
{
    id: 2,
    name: "Documento de identidad cliente.pdf",
    type: "client_support",
    caseNumber: "11001-31-10-002-2025-00087",
    caseName: "Proceso de familia",
    date: "2026-11-02",
    size: "850 KB",
    visibility: "public",
    uploadedBy: "Abogado responsable",
},
{
    id: 3,
    name: "Auto admisorio.pdf",
    type: "court_order",
    caseNumber: "11001-31-03-005-2025-00214",
    caseName: "Proceso ejecutivo",
    date: "2026-11-01",
    size: "1.1 MB",
    visibility: "public",
    uploadedBy: "Abogado responsable",
},
{
    id: 4,
    name: "Memorial solicitud de pruebas.docx",
    type: "simple_draft",
    caseNumber: "11001-40-03-015-2025-00321",
    caseName: "Proceso de responsabilidad",
    date: "2026-10-30",
    size: "420 KB",
    visibility: "public",
    uploadedBy: "Abogado responsable",
},
];

const EMPTY_FORM = {
type: "complex_draft",
caseNumber: "",
description: "",
};

const TYPE_LABELS = Object.fromEntries(
DOCUMENT_TYPES.map((item) => [item.value, item.label])
);

const formatDate = (value) =>
new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
});

const formatSize = (bytes) => {
if (bytes < 1024) return `${bytes} B`;
if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const Repo = () => {
const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("all");
const [visibilityFilter, setVisibilityFilter] = useState("all");
const [showModal, setShowModal] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);
const [form, setForm] = useState(EMPTY_FORM);
const [error, setError] = useState("");
const fileInputRef = useRef(null);

const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
    const term = search.toLowerCase();

    const matchesSearch =
        document.name.toLowerCase().includes(term) ||
        document.caseNumber.toLowerCase().includes(term) ||
        document.caseName.toLowerCase().includes(term);

    const matchesType =
        filter === "all" || document.type === filter;

    const matchesVisibility =
        visibilityFilter === "all" ||
        document.visibility === visibilityFilter;

    return matchesSearch && matchesType && matchesVisibility;
    });
}, [documents, search, filter, visibilityFilter]);

const stats = useMemo(
    () => ({
    total: documents.length,
    internal: documents.filter((doc) => doc.visibility === "internal").length,
    public: documents.filter((doc) => doc.visibility === "public").length,
    }),
    [documents]
);

const closeModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setForm(EMPTY_FORM);
    setError("");

    if (fileInputRef.current) {
    fileInputRef.current.value = "";
    }
};

const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setError("");
};

const handleUpload = (event) => {
    event.preventDefault();

    if (!selectedFile || !form.caseNumber.trim()) {
    setError("Selecciona un archivo e indica el número de expediente.");
    return;
    }

    const allowedExtensions = /\.(pdf|doc|docx|xls|xlsx|jpg|jpeg|png)$/i;

    if (!allowedExtensions.test(selectedFile.name)) {
    setError("Formato no permitido. Utiliza PDF, Office o imágenes.");
    return;
    }

    const visibility =
    form.type === "complex_draft" ? "internal" : "public";

    const newDocument = {
    id: Date.now(),
    name: selectedFile.name,
    type: form.type,
    caseNumber: form.caseNumber.trim(),
    caseName: "Expediente asociado",
    date: new Date().toISOString().split("T")[0],
    size: formatSize(selectedFile.size),
    visibility,
    uploadedBy: "Abogado responsable",
    description: form.description.trim(),
    file: selectedFile,
    };

    setDocuments((previous) => [newDocument, ...previous]);
    closeModal();
};

const handleDelete = (id) => {
    const confirmed = window.confirm(
    "¿Deseas retirar este documento del repositorio?"
    );

    if (!confirmed) return;

    setDocuments((previous) =>
    previous.filter((document) => document.id !== id)
    );
};

const handleDownload = (document) => {
    if (!document.file) {
    window.alert("Este archivo es ilustrativo y no está almacenado físicamente.");
    return;
    }

    const url = URL.createObjectURL(document.file);
    const link = window.document.createElement("a");
    link.href = url;
    link.download = document.name;
    link.click();
    URL.revokeObjectURL(url);
};

const handlePreview = (document) => {
    if (!document.file) {
    window.alert("La vista previa estará disponible al conectar el repositorio.");
    return;
    }

    const url = URL.createObjectURL(document.file);
    window.open(url, "_blank", "noopener,noreferrer");
};

return (
    <S.Page>
    <S.Header>

        <S.PrimaryButton onClick={() => setShowModal(true)}>
        <FiUploadCloud />
        Subir documento
        </S.PrimaryButton>
    </S.Header>

    <S.StatsGrid>
        <S.StatCard>
        <S.StatIcon><FiFolder /></S.StatIcon>
        <div>
            <S.StatValue>{stats.total}</S.StatValue>
            <S.StatLabel>Documentos registrados</S.StatLabel>
        </div>
        </S.StatCard>

        <S.StatCard>
        <S.StatIcon><FiLock /></S.StatIcon>
        <div>
            <S.StatValue>{stats.internal}</S.StatValue>
            <S.StatLabel>Documentos internos</S.StatLabel>
        </div>
        </S.StatCard>

        <S.StatCard>
        <S.StatIcon><FiGlobe /></S.StatIcon>
        <div>
            <S.StatValue>{stats.public}</S.StatValue>
            <S.StatLabel>Visibles para clientes</S.StatLabel>
        </div>
        </S.StatCard>
    </S.StatsGrid>

    <S.VisibilityInfo>
        <S.VisibilityItem>
        <S.VisibilityIcon $type="internal"><FiLock /></S.VisibilityIcon>
        <div>
            <strong>Borrador / Interno</strong>
            <span>
            Demandas y recursos complejos. No están disponibles para el cliente.
            </span>
        </div>
        </S.VisibilityItem>

        <S.VisibilityItem>
        <S.VisibilityIcon $type="public"><FiGlobe /></S.VisibilityIcon>
        <div>
            <strong>Público para el cliente</strong>
            <span>
            Soportes del cliente, autos judiciales y borradores simples de memoriales.
            </span>
        </div>
        </S.VisibilityItem>
    </S.VisibilityInfo>

    <S.ContentCard>
        <S.Toolbar>
        <S.SearchBox>
            <FiSearch />
            <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar documento o número de radicado..."
            />
        </S.SearchBox>

        <S.SelectGroup>
            <FiFilter />
            <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            >
            <option value="all">Todos los tipos</option>
            {DOCUMENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                {type.label}
                </option>
            ))}
            </select>

            <select
            value={visibilityFilter}
            onChange={(event) => setVisibilityFilter(event.target.value)}
            >
            <option value="all">Toda visibilidad</option>
            <option value="internal">Internos</option>
            <option value="public">Públicos</option>
            </select>
        </S.SelectGroup>
        </S.Toolbar>

        <S.TableWrapper>
        <S.Table>
            <thead>
            <tr>
                <th>Documento</th>
                <th>Tipo documental</th>
                <th>Expediente asociado</th>
                <th>Fecha de carga</th>
                <th>Visibilidad</th>
                <th>Acciones</th>
            </tr>
            </thead>

            <tbody>
            {filteredDocuments.length === 0 ? (
                <tr>
                <td colSpan="6">
                    <S.EmptyState>
                    <FiFile />
                    <strong>No se encontraron documentos</strong>
                    <span>Modifica los filtros o realiza una nueva búsqueda.</span>
                    </S.EmptyState>
                </td>
                </tr>
            ) : (
                filteredDocuments.map((document) => (
                <tr key={document.id}>
                    <td>
                    <S.DocumentName>
                        <S.FileIcon><FiFileText /></S.FileIcon>
                        <div>
                        <strong>{document.name}</strong>
                        <span>{document.size}</span>
                        </div>
                    </S.DocumentName>
                    </td>

                    <td>
                    <S.TypeText>{TYPE_LABELS[document.type]}</S.TypeText>
                    </td>

                    <td>
                    <S.CaseNumber>{document.caseNumber}</S.CaseNumber>
                    </td>

                    <td>{formatDate(document.date)}</td>

                    <td>
                    <S.VisibilityBadge $type={document.visibility}>
                        {document.visibility === "internal" ? (
                        <><FiLock /> Interno</>
                        ) : (
                        <><FiGlobe /> Público</>
                        )}
                    </S.VisibilityBadge>
                    </td>

                    <td>
                    <S.Actions>
                        <S.ActionButton
                        title="Vista previa"
                        onClick={() => handlePreview(document)}
                        >
                        <FiEye />
                        </S.ActionButton>
                        <S.ActionButton
                        title="Descargar"
                        onClick={() => handleDownload(document)}
                        >
                        <FiDownload />
                        </S.ActionButton>
                        <S.ActionButton
                        $danger
                        title="Retirar documento"
                        onClick={() => handleDelete(document.id)}
                        >
                        <FiTrash2 />
                        </S.ActionButton>
                    </S.Actions>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </S.Table>
        </S.TableWrapper>

        <S.TableFooter>
        <span>{filteredDocuments.length} documentos encontrados</span>
        <span>Repositorio del colaborador</span>
        </S.TableFooter>
    </S.ContentCard>

    {showModal && (
        <S.ModalOverlay onClick={closeModal}>
        <S.Modal onClick={(event) => event.stopPropagation()}>
            <S.ModalHeader>
            <div>
                <S.Eyebrow>NUEVO DOCUMENTO</S.Eyebrow>
                <S.ModalTitle>Subir al repositorio</S.ModalTitle>
                <S.Description>
                Clasifica el documento y asócialo a un expediente.
                </S.Description>
            </div>

            <S.CloseButton onClick={closeModal}>
                <FiX />
            </S.CloseButton>
            </S.ModalHeader>

            <S.Form onSubmit={handleUpload}>
            <S.Field>
                <label>Tipo de documento *</label>
                <select
                value={form.type}
                onChange={(event) =>
                    setForm((previous) => ({
                    ...previous,
                    type: event.target.value,
                    }))
                }
                >
                {DOCUMENT_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                    {type.label}
                    </option>
                ))}
                </select>
            </S.Field>

            <S.Field>
                <label>Número de radicado *</label>
                <input
                value={form.caseNumber}
                onChange={(event) =>
                    setForm((previous) => ({
                    ...previous,
                    caseNumber: event.target.value,
                    }))
                }
                placeholder="Ingresa el radicado del expediente"
                required
                />
            </S.Field>

            <S.Field>
                <label>Archivo *</label>
                <S.UploadArea
                $selected={Boolean(selectedFile)}
                onClick={() => fileInputRef.current?.click()}
                >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                />
                <FiUploadCloud />
                <strong>
                    {selectedFile
                    ? selectedFile.name
                    : "Selecciona un archivo para cargar"}
                </strong>
                <span>
                    PDF, Word, Excel o imágenes
                    {selectedFile ? ` · ${formatSize(selectedFile.size)}` : ""}
                </span>
                </S.UploadArea>
            </S.Field>

            <S.Field>
                <label>Descripción u observaciones</label>
                <textarea
                rows="3"
                value={form.description}
                onChange={(event) =>
                    setForm((previous) => ({
                    ...previous,
                    description: event.target.value,
                    }))
                }
                placeholder="Información adicional del documento..."
                />
            </S.Field>

            <S.AccessNotice $type={form.type === "complex_draft" ? "internal" : "public"}>
                {form.type === "complex_draft" ? <FiLock /> : <FiGlobe />}
                <div>
                <strong>
                    {form.type === "complex_draft"
                    ? "Clasificación: Borrador / Interno"
                    : "Clasificación: Público para el cliente"}
                </strong>
                <span>
                    {form.type === "complex_draft"
                    ? "Este documento será visible únicamente para el equipo autorizado."
                    : "Este documento quedará marcado como público para el cliente."}
                </span>
                </div>
            </S.AccessNotice>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.ModalActions>
                <S.SecondaryButton type="button" onClick={closeModal}>
                Cancelar
                </S.SecondaryButton>
                <S.PrimaryButton type="submit">
                <FiCheck /> Registrar documento
                </S.PrimaryButton>
            </S.ModalActions>
            </S.Form>
        </S.Modal>
        </S.ModalOverlay>
    )}
    </S.Page>
);
};

export default Repo;
