import { createGlobalStyle } from 'styled-components';

import ManropeRegular from "../assets/fonts/Manrope/static/Manrope-Regular.ttf";
import ManropeBold from "../assets/fonts/Manrope/static/Manrope-Bold.ttf";
import ManropeSemiBold from "../assets/fonts/Manrope/static/Manrope-SemiBold.ttf";
import ManropeMedium from "../assets/fonts/Manrope/static/Manrope-Medium.ttf";

import CormorantRegular from "../assets/fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf";
import CormorantMedium from "../assets/fonts/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf";
import CormorantSemiBold from "../assets/fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf";
import CormorantBold from "../assets/fonts/Cormorant_Garamond/static/CormorantGaramond-Bold.ttf";
import CormorantItalic from "../assets/fonts/Cormorant_Garamond/static/CormorantGaramond-BoldItalic.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Manrope';
        src: url(${ManropeRegular}) format('trueType');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: url(${ManropeMedium}) format('trueType');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: url(${ManropeSemiBold}) format('trueType');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: url(${ManropeBold}) format('trueType');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }


    @font-face {
        font-family: 'Cormorant Garamond';
        src: url(${CormorantRegular}) format('trueType');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        src: url(${CormorantMedium}) format('trueType');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        src: url(${CormorantSemiBold}) format('trueType');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        src: url(${CormorantBold}) format('trueType');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        src: url(${CormorantItalic}) format('trueType');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    }

    html {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    p {
        margin: 0;
    }

    body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
    }

    button {
        border: none;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

`;
export default GlobalStyles;