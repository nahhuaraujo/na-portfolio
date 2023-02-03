import styled from 'styled-components';
import { yellow_100 } from '../../../../styles';

export const Presentation = styled.section`
  p {
    font-size: 50px;
    span {
      font-weight: bold;
    }
  }

  button {
    font-size: 25px;
    margin: 2rem auto;
    display: block;
    background-color: black;
    color: ${yellow_100};
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 300ms;

    :active {
      background-color: ${yellow_100};
      border: 2px inset black;
      color: black;
    }
  }
`;
