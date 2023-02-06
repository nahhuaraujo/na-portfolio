import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  > * {
    min-width: fit-content;
  }
  /* @media (width < 1024px) {
    width: 50vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -200%;
    transition: 300ms;
  } */
`;
