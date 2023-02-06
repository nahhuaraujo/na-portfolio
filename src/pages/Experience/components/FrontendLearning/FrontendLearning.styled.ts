import styled from 'styled-components';
import { section_style } from '../../../../styles';

export const FrontendLearning = styled.section`
  ${section_style};
  @media (width < 1024px) {
    flex-direction: column-reverse;
  }
`;
