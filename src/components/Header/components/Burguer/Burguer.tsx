import * as S from './Burguer.styled';

interface IProps {
  toggleDrawer: () => void;
}
const Burguer = ({ toggleDrawer }: IProps) => {
  return (
    <S.Burguer onClick={toggleDrawer}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </S.Burguer>
  );
};

export default Burguer;
