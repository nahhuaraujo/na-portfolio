import styled from 'styled-components';
import { fade_slide_in_left, section_style } from '../../../../styles';

export const Description = styled.section`
  ${section_style};
  z-index: -100;

  ${fade_slide_in_left};
`;
