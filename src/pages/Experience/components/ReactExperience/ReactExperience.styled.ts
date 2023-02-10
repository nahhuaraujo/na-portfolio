import styled from 'styled-components';
import { fade_slide_in_right, section_style } from '../../../../styles';

export const ReactExperience = styled.section`
  ${section_style};
  ${fade_slide_in_right};
  @media (width < 1024px) {
    flex-direction: column-reverse;
  }
`;
