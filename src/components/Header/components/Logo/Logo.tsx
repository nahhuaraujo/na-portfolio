import NLogo from '../../../../assets/Logo_N_00.png';
import * as S from './Logo.styled';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <S.Logo
      onClick={() => {
        navigate('/');
      }}
    >
      <img src={NLogo} alt='N' width={50} />
    </S.Logo>
  );
};

export default Logo;
