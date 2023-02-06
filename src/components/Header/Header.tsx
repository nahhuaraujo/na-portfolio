import { useState } from 'react';
import { Logo, Nav, Burguer } from './components';
import * as S from './Header.styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <S.Header>
      <Logo />
      <Nav isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Burguer toggleDrawer={toggleDrawer} />
      {isOpen && <S.Backdrop onClick={toggleDrawer} />}
    </S.Header>
  );
};

export default Header;
