import * as S from './Navlink.styled';

interface IProps {
  to: string;
  toggleDrawer: () => void;
  children: React.ReactNode;
}
const Navlink = ({ to, children, toggleDrawer }: IProps) => {
  return (
    <S.Navlink to={to} onClick={toggleDrawer}>
      {children}
    </S.Navlink>
  );
};

export default Navlink;
