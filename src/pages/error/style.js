import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  background: #00000063;

  .error {
    max-width: 30rem;
    margin: 2rem;
  }
  
  @media(max-width: 768px){
    width: 23rem;

    .error {
      width: 20rem;
    }
  }
`;