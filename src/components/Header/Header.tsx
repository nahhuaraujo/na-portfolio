import { useState } from 'react';
import { Logo, Nav, Burguer } from './components';
import * as S from './Header.styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <S.Header>
      <Logo />
      <Nav isOpen={isOpen} closeDrawer={closeDrawer} />
      <Burguer openDrawer={openDrawer} />
      {isOpen && <S.Backdrop onClick={closeDrawer} />}
    </S.Header>
  );
};

export default Header;
