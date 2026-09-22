import { feedback, privateColors } from './colors';
import { typography } from './typography';
import { shadows } from './shadows';
import { borderRadius } from './borderRadius';

export const privateTheme = {
    colors: {
        ...privateColors,
        feedback
    },
    typography,
    shadows: shadows,
    borderRadius: borderRadius,
};