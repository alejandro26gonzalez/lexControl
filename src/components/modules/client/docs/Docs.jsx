
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiFileText,
  FiFolder,
  FiCalendar,
  FiEye,
  FiFile,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";

import { FaBalanceScale as FiScale } from "react-icons/fa";

import * as S from "../../../../styles/components/modules/client/docs.styles";

const INITIAL_DOCUMENTS = [
  {
    id: 1,
    name: "Auto admisorio de la demanda.pdf",
    type: "court_order",
    typeLabel: "Auto del juzgado",
    caseName: "Responsabilidad civil contractual",
    caseNumber: "11001-31-03-001-2025-00124",
    publishedAt: "2026-11-02",
    size: "1.1 MB",
    format: "PDF",
    description:
      "Providencia judicial mediante la cual se admite la demanda presentada.",
    downloadUrl: null,
  },
  {
    id: 2,
    name: "Memorial de solicitud de pruebas.pdf",
    type: "memorial",
    typeLabel: "Memorial",
    caseName: "Proceso ejecutivo",
    caseNumber: "11001-31-03-005-2025-00214",
    publishedAt: "2026-10-30",
    size: "420 KB",
    format: "PDF",
    description:
      "Memorial presentado dentro del proceso para solicitar la práctica de pruebas.",
    downloadUrl: null,
  },
  {
    id: 3,
    name: "Documento de identidad.pdf",
    type: "support",
    typeLabel: "Soporte del cliente",
    caseName: "Proceso de familia",
    caseNumber: "11001-31-10-002-2025-00087",
    publishedAt: "2026-10-28",
    size: "850 KB",
    format: "PDF",
    description:
      "Documento de soporte asociado al expediente del cliente.",
    downloadUrl: null,
  },
  {
    id: 4,
    name: "Acta de audiencia.pdf",
    type: "court_order",
    typeLabel: "Actuación judicial",
    caseName: "Responsabilidad civil contractual",
    caseNumber: "11001-31-03-001-2025-00124",
    publishedAt: "2026-10-21",
    size: "2.0 MB",
    format: "PDF",
    description:
      "Acta correspondiente a una actuación registrada en el proceso.",
    downloadUrl: null,
  },
  {
    id: 5,
    name: "Demanda ejecutiva.pdf",
    type: "lawsuit",
    typeLabel: "Demanda",
    caseName: "Proceso ejecutivo",
    caseNumber: "11001-31-03-005-2025-00214",
    publishedAt: "2026-10-15",
    size: "1.8 MB",
    format: "PDF",
    description:
      "Copia de la demanda presentada ante el despacho judicial.",
    downloadUrl: null,
  },
];

const formatDate = (value) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Docs = () => {
  const [documents] = useState(INITIAL_DOCUMENTS);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const filteredDocuments = useMemo(() => {
    const term = search.trim().toLowerCase();

    return documents.filter((document) => {
      const matchesSearch =
        document.name.toLowerCase().includes(term) ||
        document.caseName.toLowerCase().includes(term) ||
        document.caseNumber.toLowerCase().includes(term);

      const matchesType =
        typeFilter === "all" || document.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [documents, search, typeFilter]);

  const stats = useMemo(
    () => ({
      total: documents.length,
      lawsuits: documents.filter((doc) => doc.type === "lawsuit").length,
      judicial: documents.filter(
        (doc) => doc.type === "court_order"
      ).length,
      other: documents.filter(
        (doc) => ["support", "memorial"].includes(doc.type)
      ).length,
    }),
    [documents]
  );

  const handleDownload = (document) => {
    if (!document.downloadUrl) {
      window.alert(
        "El archivo de demostración no tiene una ubicación de descarga. La descarga estará disponible al conectar el repositorio con el backend."
      );
      return;
    }

    const link = window.document.createElement("a");
    link.href = document.downloadUrl;
    link.download = document.name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    window.document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handlePreview = (document) => {
    if (!document.downloadUrl) {
      window.alert(
        "La vista previa estará disponible cuando se conecte el repositorio documental."
      );
      return;
    }

    window.open(
      document.downloadUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <S.Page>
      <S.Header>
        <div>
          <S.Eyebrow>DOCUMENTACIÓN PERSONAL</S.Eyebrow>
          <S.Title>Mis documentos</S.Title>
          <S.Description>
            Consulta y descarga las actuaciones y documentos que tu equipo
            jurídico ha habilitado para ti.
          </S.Description>
        </div>

        <S.AccessIndicator>
          <FiShield />
          Acceso de solo lectura
        </S.AccessIndicator>
      </S.Header>

      <S.StatsGrid>
        <S.StatCard>
          <S.StatIcon $color="blue"><FiFolder /></S.StatIcon>
          <div>
            <S.StatValue>{stats.total}</S.StatValue>
            <S.StatLabel>Documentos disponibles</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="gold"><FiFileText /></S.StatIcon>
          <div>
            <S.StatValue>{stats.lawsuits}</S.StatValue>
            <S.StatLabel>Demandas publicadas</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="green"><FiScale /></S.StatIcon>
          <div>
            <S.StatValue>{stats.judicial}</S.StatValue>
            <S.StatLabel>Actuaciones judiciales</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="gray"><FiFile /></S.StatIcon>
          <div>
            <S.StatValue>{stats.other}</S.StatValue>
            <S.StatLabel>Otros documentos</S.StatLabel>
          </div>
        </S.StatCard>
      </S.StatsGrid>

      <S.ContentCard>
        <S.CardHeader>
          <div>
            <S.SectionTitle>Biblioteca documental</S.SectionTitle>
            <S.SectionDescription>
              Documentos publicados por tu abogado para consulta y descarga.
            </S.SectionDescription>
          </div>
        </S.CardHeader>

        <S.Toolbar>
          <S.SearchBox>
            <FiSearch />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar documento, expediente o radicado..."
            />
          </S.SearchBox>

          <S.FilterGroup>
            <FiFilter />
            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
            >
              <option value="all">Todos los documentos</option>
              <option value="lawsuit">Demandas</option>
              <option value="court_order">Actuaciones judiciales</option>
              <option value="memorial">Memoriales</option>
              <option value="support">Soportes del cliente</option>
            </select>
          </S.FilterGroup>
        </S.Toolbar>

        <S.DocumentList>
          {filteredDocuments.length === 0 ? (
            <S.EmptyState>
              <FiFolder />
              <strong>No hay documentos disponibles</strong>
              <span>
                No encontramos documentos que coincidan con tu búsqueda.
              </span>
            </S.EmptyState>
          ) : (
            filteredDocuments.map((document) => (
              <S.DocumentItem key={document.id}>
                <S.DocumentIcon>
                  <FiFileText />
                </S.DocumentIcon>

                <S.DocumentInformation>
                  <S.DocumentName>{document.name}</S.DocumentName>

                  <S.DocumentMetadata>
                    <S.DocumentType>{document.typeLabel}</S.DocumentType>
                    <span>·</span>
                    <span>{document.format}</span>
                    <span>·</span>
                    <span>{document.size}</span>
                  </S.DocumentMetadata>

                  <S.CaseInformation>
                    <FiFolder />
                    <span>{document.caseName}</span>
                    <S.CaseNumber>{document.caseNumber}</S.CaseNumber>
                  </S.CaseInformation>

                  <S.PublishedDate>
                    <FiCalendar />
                    Publicado el {formatDate(document.publishedAt)}
                  </S.PublishedDate>
                </S.DocumentInformation>

                <S.DocumentActions>
                  <S.PublicBadge>
                    <FiShield /> Disponible
                  </S.PublicBadge>

                  <S.ActionButtons>
                    <S.IconButton
                      title="Consultar información"
                      onClick={() => setSelectedDocument(document)}
                    >
                      <FiEye />
                    </S.IconButton>

                    <S.DownloadButton
                      onClick={() => handleDownload(document)}
                    >
                      <FiDownload />
                      Descargar
                    </S.DownloadButton>
                  </S.ActionButtons>
                </S.DocumentActions>
              </S.DocumentItem>
            ))
          )}
        </S.DocumentList>

        <S.ListFooter>
          <span>{filteredDocuments.length} documentos encontrados</span>
          <span>Documentos visibles para tu cuenta</span>
        </S.ListFooter>
      </S.ContentCard>

      <S.SecurityNotice>
        <FiShield />
        <div>
          <strong>Tu documentación está protegida</strong>
          <span>
            Solo se muestran archivos que tu equipo jurídico ha autorizado
            expresamente para consulta del cliente.
          </span>
        </div>
      </S.SecurityNotice>

      {selectedDocument && (
        <S.ModalOverlay onClick={() => setSelectedDocument(null)}>
          <S.Modal onClick={(event) => event.stopPropagation()}>
            <S.ModalHeader>
              <div>
                <S.Eyebrow>DETALLE DOCUMENTAL</S.Eyebrow>
                <S.ModalTitle>Información del documento</S.ModalTitle>
              </div>

              <S.CloseButton onClick={() => setSelectedDocument(null)}>
                ×
              </S.CloseButton>
            </S.ModalHeader>

            <S.DetailDocument>
              <S.DetailDocumentIcon><FiFileText /></S.DetailDocumentIcon>
              <div>
                <strong>{selectedDocument.name}</strong>
                <span>
                  {selectedDocument.format} · {selectedDocument.size}
                </span>
              </div>
            </S.DetailDocument>

            <S.DetailList>
              <div>
                <span>Tipo documental</span>
                <strong>{selectedDocument.typeLabel}</strong>
              </div>
              <div>
                <span>Expediente asociado</span>
                <strong>{selectedDocument.caseName}</strong>
              </div>
              <div>
                <span>Número de radicado</span>
                <strong>{selectedDocument.caseNumber}</strong>
              </div>
              <div>
                <span>Fecha de publicación</span>
                <strong>{formatDate(selectedDocument.publishedAt)}</strong>
              </div>
              <div>
                <span>Disponibilidad</span>
                <strong>Visible para el cliente</strong>
              </div>
            </S.DetailList>

            <S.DetailDescription>
              {selectedDocument.description}
            </S.DetailDescription>

            <S.ModalActions>
              <S.SecondaryButton onClick={() => setSelectedDocument(null)}>
                Cerrar
              </S.SecondaryButton>
              <S.DownloadButton
                onClick={() => handleDownload(selectedDocument)}
              >
                <FiDownload /> Descargar documento
              </S.DownloadButton>
            </S.ModalActions>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </S.Page>
  );
};

export default Docs;
