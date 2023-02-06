import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem 2rem;
  background-color: black;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  position: relative;
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
  cursor: pointer;
`;
