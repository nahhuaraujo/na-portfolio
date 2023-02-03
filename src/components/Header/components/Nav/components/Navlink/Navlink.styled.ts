import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { yellow_100 } from '../../../../../../styles';

export const Navlink = styled(Link)`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  color: ${yellow_100};
  text-decoration: none;
  transition: 300ms;

  :hover {
    text-decoration: underline;
  }
  :active {
    border: 2px inset ${yellow_100};
  }
`;
