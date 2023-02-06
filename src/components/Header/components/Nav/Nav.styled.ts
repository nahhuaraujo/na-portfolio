import styled from 'styled-components';
import { drawer_style } from '../../../../styles';

interface IProps {
  isOpen: boolean;
}
export const Nav = styled.nav<IProps>`
  display: flex;
  align-items: center;
  z-index: 100;

  > * {
    min-width: fit-content;
  }

  @media (width < 1024px) {
    display: none;
    ${({ isOpen }) => isOpen && `${drawer_style}`};
  }
`;
