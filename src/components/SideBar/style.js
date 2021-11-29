import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 18rem;

    background: #0d0d0d;

    position: fixed;

    z-index: 1;

    top: 5rem;
`;

export const ContainerMobile = styled.div`
    height: 100vh;
    width: 18rem;

    background: #0d0d0d;

    position: fixed;

    z-index: 1;

    top: 5rem;

    width: 5rem;

    @media(max-width: 768px){
        position: absolute;
    }
`;

export const Aside = styled.aside`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;

    .nav__menu {
        list-style: none;
    }

    .subtitle {
        font-family: Roboto,sans-serif;
        font-size: 1rem;
        color: #ffffff;
        
        width: 100%;

        margin-bottom: 0.1rem;
        padding: 1rem;

        text-align: left;
    }

    .nav__button, .signOut {
        width: 16rem;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Roboto,sans-serif;
        font-size: 1rem;
    
        gap: 0.4rem;
        
        color: #ffffff;
        background: #2128227a;
        
        text-align: center;
        text-decoration: none;

        padding: 0.8rem;
        margin-top: 0.9rem;
        border-radius: 0.3rem;
        
        border: none;

        cursor: pointer;

        &:hover {
            filter: brightness(0.9);
        } 
    }
`;

export const AsideMobile = styled.aside`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    

    padding: 2rem 1.4rem;

    .nav__menu {
        list-style: none;
    }

    .subtitle {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        color: #ffffff;
        
        width: 100%;

        margin-bottom: 0.1rem;
        padding: 1rem;

        text-align: left;
    }

    .nav__button, .signOut {
        width: 5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Roboto,sans-serif;
        font-size: 1.3rem;
        
        color: #ffffff;
        background: transparent;
        
        text-align: center;
        text-decoration: none;

        padding: 0.8rem;
        margin-top: 0.9rem;
        border-radius: 0.3rem;
        
        border: none;

        cursor: pointer;

        &:hover {
            filter: brightness(0.9);
        } 
    }
`;