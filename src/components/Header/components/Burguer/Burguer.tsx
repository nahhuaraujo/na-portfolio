import * as S from './Burguer.styled';

interface IProps {
  openDrawer: () => void;
}
const Burguer = ({ openDrawer }: IProps) => {
  return (
    <S.Burguer onClick={openDrawer}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </S.Burguer>
  );
};

export default Burguer;
