import styled from 'styled-components';
import { yellow_100_value } from '../../styles';

export const Footer = styled.footer`
  padding: 1rem;
  background-color: black;
  color: ${yellow_100_value};
  display: flex;
  justify-content: space-between;
  text-align: center;

  > span {
    font-weight: bold;
  }
`;
