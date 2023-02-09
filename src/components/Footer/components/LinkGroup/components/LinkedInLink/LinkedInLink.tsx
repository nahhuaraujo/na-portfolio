import { FaLinkedin } from 'react-icons/fa';
import * as S from './LinkedInLink.styled';

const LinkedInLink = () => {
  return (
    <S.LinkedInLink href='https://www.linkedin.com/in/araujonahuel' title='Perfil LinkedIn' target='_blank'>
      <FaLinkedin size={20} />
    </S.LinkedInLink>
  );
};

export default LinkedInLink;
