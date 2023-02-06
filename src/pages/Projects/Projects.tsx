import { useEffect } from 'react';
import { BackTogetherProject, SkyGalProject } from './components';
import * as S from './Projects.styled';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Projects>
      <SkyGalProject />
      <BackTogetherProject />
    </S.Projects>
  );
};

export default Projects;
