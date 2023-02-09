import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconLink } from './components';
import * as S from './LinkGroup.styled';

const LinkGroup = () => {
  return (
    <S.LinkGroup>
      <IconLink
        href='https://www.linkedin.com/in/araujonahuel'
        title='Perfil LinkedIn'
        icon={<FaLinkedin size={25} />}
      />
      <IconLink
        href='https://github.com/nahhuaraujo?tab=repositories'
        title='Repositorios Github'
        icon={<FaGithub size={25} />}
      />
    </S.LinkGroup>
  );
};

export default LinkGroup;
