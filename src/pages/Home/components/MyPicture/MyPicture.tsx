import * as S from './MyPicture.styled';
import myPicture from '../../../../assets/Profile pic.jpeg';

const MyPicture = () => {
  return (
    <S.MyPicture>
      <img src={myPicture} alt='' width={250} />
    </S.MyPicture>
  );
};

export default MyPicture;
