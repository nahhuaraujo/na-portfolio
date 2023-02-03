import { Navlink, DownloadCVButton } from './components';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.Nav>
      <Navlink to='/sobre-mi'>Sobre mí</Navlink>
      <Navlink to='/experiencia'>Experiencia</Navlink>
      <Navlink to='/proyectos'>Proyectos</Navlink>
      <DownloadCVButton />
    </S.Nav>
  );
};

export default Nav;
