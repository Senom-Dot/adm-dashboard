import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    padding-top: 5rem;

    margin-left: 5rem;

    background: var(--background-sub);

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

        margin-left: 4rem;
        padding-top: 0;
    }
`;