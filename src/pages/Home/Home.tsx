import { useEffect } from 'react';
import { MyPicture, Presentation } from './components';
import * as S from './Home.styled';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Home>
      <MyPicture />
      <Presentation />
    </S.Home>
  );
};

export default Home;
