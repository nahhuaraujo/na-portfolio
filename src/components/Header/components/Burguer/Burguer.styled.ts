import styled from 'styled-components';
import { yellow_100_value } from '../../../../styles';

export const Burguer = styled.div`
  display: none;

  > div {
    margin-top: 8px;
    cursor: pointer;

    span {
      border-bottom: 2px solid ${yellow_100_value};
      display: block;
      width: 50px;
      margin-bottom: 8px;
    }
  }

  @media (width < 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
