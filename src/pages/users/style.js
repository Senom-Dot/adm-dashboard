import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    margin-left: 18rem;

    padding-top: 5rem;

    background: #eeee;

    .container__title {
        padding: 2rem;
        
        background: #ffffff6b;

        border-bottom: 1px solid #2d29292b;
        
        h2 {
            font-size: 1.2rem;
            font-family: RobotoMedium, sans-serif;
            font-weight: 500;
            color: var(--title-color);
        }

        strong {
            color: #49bb25;
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-left: 0;
        padding-top: 0;
    }
`;

export const Grid = styled.section`
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin: 2rem;

    gap: 1rem;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Card = styled.div`
    height: 6rem;
    width: 6rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 1rem;

    border-radius: 1.2rem;

    background: #00b360;

    a {
        cursor: pointer;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;