import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 1.5rem;
`;

export const Section = styled.section`
    height: 27rem;
    width: 25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--white);
    border-radius: 0.9rem;

    padding: 4rem 1rem;

    gap: 1rem;

    .section__subtitle {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        
        color: var(--title-color);

        font-weight: 400;
        line-height: 0.3rem;
    }

    @media(max-width: 768px){
        max-width: 21.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;

    label {
        display: flex;
        flex-direction: column;

        span {
            font-family: Roboto, sans-serif;
            font-size: 1rem;
            line-height: 1.5rem;
            color: #424242;
        }

        .form__hideIcon {
            position: relative;

            top: -2rem;
            left: 0;
            right: 0;

            margin-left: 17rem;
        }
    }
`;

export const Input = styled.input`
    height: 3rem;
    max-width: 19rem;

    padding: 0.8rem;

    outline: none;
    background: transparent;
    border-radius: 0.3rem;

    border: 1px solid rgba(0,0,0,.25);
`;