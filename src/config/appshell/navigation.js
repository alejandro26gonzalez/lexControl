import {
  Home,
  Users,
  MapPin,
  Settings,
  FileText,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export const navigationByRole = {
  ADMIN: [
    {
      label: "Inicio",
      path: "/portal/admin/dashboard",
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
      path: "/portal/admin/areas",
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
};