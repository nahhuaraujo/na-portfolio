import { DownloadCVButton, Navlink } from './components';
import * as S from './Nav.styled';

interface IProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}
const Nav = ({ isOpen, toggleDrawer }: IProps) => {
  return (
    <S.Nav isOpen={isOpen}>
      <Navlink toggleDrawer={toggleDrawer} to='/'>
        Inicio
      </Navlink>
      <Navlink toggleDrawer={toggleDrawer} to='/sobre-mi'>
        Sobre mí
      </Navlink>
      <Navlink toggleDrawer={toggleDrawer} to='/experiencia'>
        Experiencia
      </Navlink>
      <Navlink toggleDrawer={toggleDrawer} to='/proyectos'>
        Proyectos
      </Navlink>
      <DownloadCVButton />
    </S.Nav>
  );
};

export default Nav;
