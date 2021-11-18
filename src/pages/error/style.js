import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  background: #00000063;

  a {
    text-decoration: none;
  }

  .error {
    max-width: 20rem;
    margin: 1.5rem;
  }
`;