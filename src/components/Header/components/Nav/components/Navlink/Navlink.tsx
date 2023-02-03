import * as S from './Navlink.styled';

interface IProps {
  to: string;
  children: React.ReactNode;
}
const Navlink = ({ to, children }: IProps) => {
  return <S.Navlink to={to}>{children}</S.Navlink>;
};

export default Navlink;
