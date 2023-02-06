import styled from 'styled-components';
import { page_style } from '../../styles';

export const Home = styled.main`
  ${page_style};

  @media (width < 1024px) {
    gap: 2rem;
    text-align: center;
    flex-direction: column;
  }
`;
