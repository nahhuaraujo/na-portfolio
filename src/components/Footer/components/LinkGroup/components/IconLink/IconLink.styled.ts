import styled from 'styled-components';
import { yellow_100_value } from '../../../../../../styles';

export const IconLink = styled.a`
  cursor: pointer;
  color: ${yellow_100_value};
  transition: 200ms;

  :hover {
    transform: translateY(10%);
  }
`;
