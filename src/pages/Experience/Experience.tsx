import * as S from './Experience.styled';
import { JavaExperience, FrontendLearning, UILearning, ReactExperience } from './components';

const Experience = () => {
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
