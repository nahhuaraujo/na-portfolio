import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: black;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
`;
