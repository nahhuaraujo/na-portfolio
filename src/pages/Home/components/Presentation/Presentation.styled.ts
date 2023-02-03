import styled from 'styled-components';
import { yellow_100_value, font_size_300_value, font_size_200_value } from '../../../../styles';

export const Presentation = styled.section`
  p {
    font-size: ${font_size_300_value};
    span {
      font-weight: bold;
      :hover {
        text-decoration: underline;
      }
    }
  }

  > span {
    font-style: italic;
    font-size: ${font_size_200_value};
  }

  button {
    font-size: ${font_size_200_value};
    margin: 2rem auto;
    display: block;
    background-color: black;
    color: ${yellow_100_value};
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 300ms;

    :active {
      background-color: ${yellow_100_value};
      border: 2px inset black;
      color: black;
    }
  }
`;
