import * as S from './Projects.styled';
import { SkyGalProject, BackTogetherProject } from './components';

const Projects = () => {
  return (
    <S.Projects>
      <SkyGalProject />
      <BackTogetherProject />
    </S.Projects>
  );
};

export default Projects;
