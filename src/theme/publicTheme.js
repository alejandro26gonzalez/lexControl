import { colors, feedback } from "./colors";
import { typography } from "./typography";
import { shadows } from "./shadows";
import { borderRadius } from "./borderRadius";

export const publicTheme = {
    mode: 'light',
    colors: {
        ...colors,
        feedback,
    },
    typography,
    borderRadius,
    shadows
};