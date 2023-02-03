import { Logo, Nav } from './components';
import * as S from './Header.styled';

export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Nav />
    </S.Header>
  );
};

export default Header;
