import styled from 'styled-components';
import { caption_style } from '../../styles';

interface IProps {
  align: string;
}
export const Caption = styled.p<IProps>`
  text-align: ${({ align }) => align};
  ${caption_style};
`;
