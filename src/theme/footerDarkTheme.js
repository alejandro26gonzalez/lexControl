import { publicTheme } from './publicTheme';

export const footerDarkTheme = {
    ...publicTheme,

    mode: 'dark',

    colors: {
        ...publicTheme.colors,

        background: '#08111B',
        surface: '#101E2D',

        text: '#FFFFFF',
        textSecondary: '#D9E0E4',
        textMuted: '#AAB5BE',

        border: 'rgba(255, 255, 255, 0.35)',
    },
};