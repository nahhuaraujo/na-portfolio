import styled from 'styled-components';
import { font_size_100_value, font_size_200_value, font_size_400_value, yellow_100_value } from '../../../../styles';

export const Presentation = styled.section`
  width: fit-content;
`;

export const Title = styled.p`
  padding-bottom: 1rem;
  font-size: ${font_size_400_value};
  font-weight: bold;
  text-decoration: underline;
`;

export const Subtitle = styled.p`
  padding-bottom: 1rem;
  font-size: ${font_size_200_value};
  span {
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Lead = styled.p`
  font-style: italic;
  font-size: ${font_size_100_value};
`;

export const CallToAction = styled.button`
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
`;
