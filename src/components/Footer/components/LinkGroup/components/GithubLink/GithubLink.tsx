import { FaGithub } from 'react-icons/fa';
import * as S from './GithubLink.styled';

const GithubLink = () => {
  return (
    <S.GithubLink href='https://github.com/nahhuaraujo?tab=repositories' title='Repositorios Github' target='_blank'>
      <FaGithub size={20} />
    </S.GithubLink>
  );
};

export default GithubLink;
