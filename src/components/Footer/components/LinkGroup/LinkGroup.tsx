import { GithubLink, LinkedInLink } from './components';
import * as S from './LinkGroup.styled';

const LinkGroup = () => {
  return (
    <S.LinkGroup>
      <LinkedInLink />
      <GithubLink />
    </S.LinkGroup>
  );
};

export default LinkGroup;
