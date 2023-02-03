import * as S from './About.styled';
import { Description, Objective } from './components';

const About = () => {
  return (
    <S.About>
      <Description />
      <Objective />
    </S.About>
  );
};

export default About;
