import styled from 'styled-components';

export const ButtonStyle = styled.button`
    width: 19rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    
    background: var(--button-color);
    border-radius: .3rem;
    border-style: none;

    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 1rem;

    color: var(--white);

    &:hover {
        filter: brightness(0.9);
    }
`;