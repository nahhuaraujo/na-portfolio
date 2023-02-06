import { DownloadCVButton, Navlink } from './components';
import * as S from './Nav.styled';

interface IProps {
  isOpen: boolean;
  closeDrawer: () => void;
}
const Nav = ({ isOpen, closeDrawer }: IProps) => {
  return (
    <S.Nav isOpen={isOpen}>
      <Navlink closeDrawer={closeDrawer} to='/'>
        Inicio
      </Navlink>
      <Navlink closeDrawer={closeDrawer} to='/sobre-mi'>
        Sobre mí
      </Navlink>
      <Navlink closeDrawer={closeDrawer} to='/experiencia'>
        Experiencia
      </Navlink>
      <Navlink closeDrawer={closeDrawer} to='/proyectos'>
        Proyectos
      </Navlink>
      <DownloadCVButton />
    </S.Nav>
  );
};

export default Nav;
