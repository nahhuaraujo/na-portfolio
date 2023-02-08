import styled from 'styled-components';
import { yellow_100_value } from '../../styles';

export const Footer = styled.footer`
  background-color: black;
  color: ${yellow_100_value};
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  text-align: center;

  > span {
    font-weight: bold;
  }
`;
