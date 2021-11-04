import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 5rem;
    width: 100%;
    
    display: flex;
    align-items: center;

    background: var(--white);

    padding: 1rem;
    
    h1 {
        font-size: 1rem;
        font-family: Roboto, sans-serif;
        font-weight: bold;
        color: var(--title-color);
    }
`;