import styled from "styled-components";

export const Wrapper = styled.div`
    height: 5rem;
    width: 100%;
    
    position: fixed;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--white);
    border-bottom: 1px solid #2d29292b;

    padding: 1.5rem;

    @media(max-width: 768px){
        position: relative;
    }
`;

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;

    .header__title {
        font-size: 1.2rem;
        font-family: RobotoMedium, sans-serif;
        font-weight: 600;
        color: var(--title-color);

        padding: 0.25rem 1rem;
        border: 1px solid #e6e8eb;
    
        border-radius: 1rem;
        
        strong {
            color: #49bb25;
        }
    }

    .header__hamburguer {
        display: flex;

        background: none;
        border: none;
        cursor: pointer;

        font-size: 1.3rem;

        margin-left: 0.1rem;

        color: #2e384d;
        
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    gap: 1rem;

    .nav__welcome {
        color: var(--black-color);
        font-family: Roboto, sans-serif;
        font-weight: 400;
        line-height: 1rem;
        font-size: 0.9rem;
    }

    .nav__signOut {
        background: none;
        border: none;
        cursor: pointer;

        font-size: 1.3rem;

        color: #2e384d;
        
        &:hover {
            filter: brightness(0.9);
        }
    }
`;