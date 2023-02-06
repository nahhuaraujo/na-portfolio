import * as S from './Navlink.styled';

interface IProps {
  to: string;
  closeDrawer: () => void;
  children: React.ReactNode;
}
const Navlink = ({ to, children, closeDrawer }: IProps) => {
  return (
    <S.Navlink to={to} onClick={closeDrawer}>
      {children}
    </S.Navlink>
  );
};

export default Navlink;
