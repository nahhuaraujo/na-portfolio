import * as S from './Caption.styled';

interface IProps {
  align?: string;
  children: React.ReactNode;
}
const Caption = ({ align = 'left', children }: IProps) => <S.Caption align={align}>{children}</S.Caption>;

export default Caption;
