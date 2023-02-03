import { useNavigate } from 'react-router-dom';
import NLogo from '../../../../assets/Logo_N_00.png';
import * as S from './Logo.styled';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <S.Logo
      src={NLogo}
      alt='N'
      width={80}
      onClick={() => {
        navigate('/');
      }}
    ></S.Logo>
  );
};

export default Logo;
