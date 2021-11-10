import styled, { keyframes } from "styled-components";

export const showForm = keyframes`
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.div`
    height: 25rem;
    width: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transform: translateX(-10rem);
    opacity: 0;

    animation: 0.2s ${showForm} ease forwards;

    background: var(--white);
    box-shadow: 10px 3px 20px rgb(58 58 1 / 10%);
    border-radius: 0.9rem;

    gap: 1rem;

    padding: 4rem 1rem;

    @media(max-width: 968px){
        display: flex;
        
        margin: 1rem;

        max-width: 23rem;
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