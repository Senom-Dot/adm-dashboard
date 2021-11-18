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
        height: 100vh;

        background: var(--background);
 
        ::-webkit-scrollbar-track {
            border-radius: 5px;

            box-shadow: inset 0 0 3px #8257E6; 
            border-radius: 5px;
        }

        ::-webkit-scrollbar {
            width: 8px;
            height: 7px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: rgb(0, 179, 96); 
            border-radius: 5px;
        }
    }
    
    :root {
        --background: #08241d;
        --title-color: #08241d;
        --button-color: #08241d;
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