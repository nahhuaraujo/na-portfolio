import * as S from './Illustration.styled';

interface IProps {
  children: React.ReactNode;
}
const Illustration = ({ children }: IProps) => <S.Illustration>{children}</S.Illustration>;

export default Illustration;
