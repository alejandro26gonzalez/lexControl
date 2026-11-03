
import styled from "styled-components";

const cardColors = {
    blue: {
        background: "linear-gradient(135deg, #062344 0%, #03172D 65%, #082F55 100%)",
        accent: "#3B9BEF",
        iconBackground: "rgba(59, 155, 239, 0.20)",
        glow: "rgba(35, 128, 219, 0.20)",
    },
    teal: {
        background: "linear-gradient(135deg, #063B3C 0%, #032D30 65%, #075450 100%)",
        accent: "#20D5BD",
        iconBackground: "rgba(32, 213, 189, 0.18)",
        glow: "rgba(20, 190, 168, 0.18)",
    },
    gray: {
        background: "linear-gradient(135deg, #303B4C 0%, #202A38 65%, #394658 100%)",
        accent: "#C2CCD9",
        iconBackground: "rgba(194, 204, 217, 0.18)",
        glow: "rgba(177, 190, 207, 0.12)",
    },
    gold: {
        background: "linear-gradient(135deg, #42300B 0%, #2D2108 65%, #514016 100%)",
        accent: "#F4C044",
        iconBackground: "rgba(244, 192, 68, 0.18)",
        glow: "rgba(214, 159, 33, 0.16)",
    },
};

export const UserStatsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

export const StatCard = styled.article`
    ${({ $color = "blue" }) => {
        const palette = cardColors[$color] || cardColors.blue;

        return `
            --stat-accent: ${palette.accent};
            --stat-icon-bg: ${palette.iconBackground};
            --stat-glow: ${palette.glow};
            background: ${palette.background};
        `;
    }}

    position: relative;
    isolation: isolate;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    min-width: 0;
    min-height: 210px;
    padding: 24px;

    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 15px;

    color: #FFFFFF;
    box-shadow:
        0 8px 22px rgba(8, 17, 27, 0.10),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;

        width: 180px;
        height: 180px;
        right: -65px;
        bottom: -115px;

        border: 1px solid var(--stat-glow);
        border-radius: 50%;
        box-shadow:
            0 0 0 20px var(--stat-glow),
            0 0 0 42px rgba(255, 255, 255, 0.025);

        pointer-events: none;
    }

    &:hover {
        transform: translateY(-3px);

        box-shadow:
            0 14px 30px rgba(8, 17, 27, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 560px) {
        min-height: 180px;
        padding: 20px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;

        &:hover {
            transform: none;
        }
    }
`;

export const StatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 22px;
`;

export const StatIcon = styled.div`
    display: grid;
    place-items: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;

    background: var(--stat-icon-bg);
    color: var(--stat-accent);
`;

export const StatLabel = styled.span`
    color: rgba(255, 255, 255, 0.94);

    font-family: ${({ theme }) =>
        theme.typography?.fontFamily?.body ||
        "'Manrope', sans-serif"};

    font-size: 0.91rem;
    font-weight: 700;
    line-height: 1.4;
`;

export const StatValue = styled.p`
    margin: 0 0 8px;

    color: #FFFFFF;

    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(2.6rem, 3vw, 3.4rem);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.035em;

    font-variant-numeric: tabular-nums;
`;

export const StatDescription = styled.p`
    margin: auto 0 0;

    color: rgba(255, 255, 255, 0.78);

    font-family: ${({ theme }) =>
        theme.typography?.fontFamily?.body ||
        "'Manrope', sans-serif"};

    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.5;
`;
