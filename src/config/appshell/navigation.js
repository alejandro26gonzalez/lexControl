import {
  Home,
  Users,
  MapPin,
  Settings,
  FileText,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import { LuFolders } from "react-icons/lu";
import { FaCalendarAlt, FaFileSignature  } from "react-icons/fa";



export const navigationByRole = {
  ADMIN: [
    {
      label: "Inicio",
      path: "/portal/admin",
      icon: Home,
    },

    {
      section: "GESTIÓN",
    },

    {
      label: "Usuarios",
      path: "/portal/admin/users",
      icon: Users,
    },

    {
      label: "Áreas",
      path: "/portal/admin/sites",
      icon: MapPin,
    },

    {
      label: "Catálogos",
      path: "/portal/admin/catalogs",
      icon: FileText,
    },

    {
      section: "SUPERVISIÓN",
    },

    {
      label: "Auditoría",
      path: "/portal/admin/audit",
      icon: ShieldCheck,
    },

    {
      label: "Reportes",
      path: "/portal/admin/reports",
      icon: BarChart3,
    },

    {
      label: "Configuración",
      path: "/portal/admin/settings",
      icon: Settings,
    },
  ],
  COLLABORATOR: [
    {
      label: "Inicio",
      path: "/portal/collaborator",
      icon: Home,
    },
    {
      section: "GESTIÓN",
    },
    {
      label: "Expedientes",
      path: "/portal/collaborator/files",
      icon: LuFolders,
    },

    {
      label: "Citas",
      path: "/portal/collaborator/appointments",
      icon: FaCalendarAlt,
    },

    {
      label: "Repositorio documental",
      path: "/portal/collaborator/repo",
      icon: FaFileSignature ,
    },

  ],
  CLIENT: [
    {
      label: "Inicio",
      path: "/portal/client",
      icon: Home,
    },
    {
      section: "GESTIÓN",
    },
    {
      label: "Expedientes",
      path: "/portal/client/files",
      icon: LuFolders,
    },
    {
      label: "Agenda",
      path: "/portal/client/appointments",
      icon: FaCalendarAlt,
    },
    {
      label: "Documentos",
      path: "/portal/client/repo",
      icon: FaFileSignature,
    },
  ],
};