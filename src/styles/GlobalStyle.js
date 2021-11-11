import { createGlobalStyle } from 'styled-components';

import Roboto from '../assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoMedium from '../assets/fonts/Roboto/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    
    body {
        background: var(--background);
    }
    
    :root {
        --background: #0e0824;
        --title-color: #2E384D;
        --button-color: #2e384d;
        --white: #ffffff;
    }

    // Global Custom Fonts
    
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('truetype');
    }

    @font-face {
        font-family: 'RobotoMedium';
        src: url(${RobotoMedium}) format('truetype');
    }
`;