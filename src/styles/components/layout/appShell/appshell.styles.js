
import styled from "styled-components";

/* ==========================================================
   APP SHELL — CONTENEDOR PRINCIPAL
========================================================== */

export const AppShellContainer = styled.div`
    display: flex;

    width: 100%;
    min-height: 100vh;

    background: ${({ theme }) =>
        theme.colors?.background || "#F5F6F8"};

    color: ${({ theme }) =>
        theme.colors?.text || "#08111B"};

    overflow: hidden;
`;

/* ==========================================================
   ÁREA PRINCIPAL
========================================================== */

export const AppShellMain = styled.main`
    display: flex;
    flex-direction: column;

    flex: 1;
    min-width: 0;
    min-height: 100vh;

    background: ${({ theme }) =>
        theme.colors?.surface || "#FFFFFF"};

    overflow: hidden;
`;

/* ==========================================================
   CONTENIDO
========================================================== */

export const AppShellContent = styled.div`
    flex: 1;
    min-width: 0;

    padding: 0 24px 32px;

    overflow-x: hidden;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 0 18px 24px;
    }

    @media (max-width: 480px) {
        padding: 0 14px 20px;
    }
`;

/* ==========================================================
   ENCABEZADO DE BIENVENIDA
========================================================== */

export const WelcomeSection = styled.section`
    position: relative;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    min-height: 120px;
    margin-bottom: 24px;

    isolation: isolate;

    @media (max-width: 640px) {
        min-height: 110px;
    }
`;

/* ==========================================================
   TÍTULO
========================================================== */

export const WelcomeTitle = styled.h1`
    position: relative;
    z-index: 1;

    margin: 8px 0 2px;

    font-family:
        "Cormorant Garamond",
        Georgia,
        serif;

    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.035em;

    color: ${({ theme }) =>
        theme.colors?.primary || "#08111B"};

    @media (max-width: 640px) {
        font-size: clamp(1.8rem, 6vw, 2.3rem);
    }
`;

/* ==========================================================
   DESCRIPCIÓN
========================================================== */

export const WelcomeDescription = styled.p`
    position: relative;
    z-index: 1;

    margin: 4px 0 0;

    font-family: ${({ theme }) =>
        theme.typography?.fontFamily?.body ||
        "'Manrope', sans-serif"};

    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.5;

    color: ${({ theme }) =>
        theme.colors?.textSecondary || "#39434E"};
`;

/* ==========================================================
   IMAGEN DEL ENCABEZADO
========================================================== */

export const WelcomeImage = styled.img`
    position: absolute;
    z-index: 0;

    top: -4px;
    right: -24px;

    width: min(32%, 290px);
    height: 120px;

    object-fit: cover;
    object-position: center;

    pointer-events: none;
    user-select: none;

    @media (max-width: 768px) {
        right: -18px;
        width: 34%;
        opacity: 0.75;
    }

    @media (max-width: 480px) {
        width: 38%;
        height: 100px;
        right: -14px;
        opacity: 0.35;
    }
`;
