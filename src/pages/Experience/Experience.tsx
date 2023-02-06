import { useEffect } from 'react';
import { FrontendLearning, JavaExperience, ReactExperience, UILearning } from './components';
import * as S from './Experience.styled';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Experience>
      <JavaExperience />
      <FrontendLearning />
      <UILearning />
      <ReactExperience />
    </S.Experience>
  );
};

export default Experience;
