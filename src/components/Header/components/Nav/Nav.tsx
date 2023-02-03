import { Navlink } from './components';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.Nav>
      <Navlink to='/sobre-mi'>Sobre mí</Navlink>
      <Navlink to='/experiencia'>Experiencia</Navlink>
      <Navlink to='/proyectos'>Proyectos</Navlink>
      <Navlink to='/contacto'>Contacto</Navlink>
    </S.Nav>
  );
};

export default Nav;
