import * as S from './Home.styled';
import { MyPicture, Presentation } from './components';

const Home = () => {
  return (
    <S.Home>
      <MyPicture />
      <Presentation />
    </S.Home>
  );
};

export default Home;
