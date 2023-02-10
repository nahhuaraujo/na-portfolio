import { useEffect } from 'react';
import { FrontendLearning, JavaExperience, ReactExperience, UILearning } from './components';
import * as S from './Experience.styled';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Experience>
      <ReactExperience />
      <UILearning />
      <FrontendLearning />
      <JavaExperience />
    </S.Experience>
  );
};

export default Experience;
