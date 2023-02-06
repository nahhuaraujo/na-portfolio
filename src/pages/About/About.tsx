import { useEffect } from 'react';
import * as S from './About.styled';
import { Description, Objective } from './components';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.About>
      <Description />
      <Objective />
    </S.About>
  );
};

export default About;
