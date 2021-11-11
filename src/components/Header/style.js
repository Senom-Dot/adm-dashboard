import styled from "styled-components";

export const Wrapper = styled.div`
    height: 5rem;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--white);

    border-bottom: 2px solid #2d2929;

    padding: 1.5rem;
`;

export const HeaderStyle = styled.header`
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
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    gap: 1rem;

    .nav__welcome {
        color: var(--title-color);
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