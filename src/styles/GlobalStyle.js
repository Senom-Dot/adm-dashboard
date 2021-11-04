import { createGlobalStyle } from 'styled-components';

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
`;