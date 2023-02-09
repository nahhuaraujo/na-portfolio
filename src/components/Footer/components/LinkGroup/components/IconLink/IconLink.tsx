import * as S from './IconLink.styled';

interface IProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}
const IconLink = ({ href, title, icon }: IProps) => {
  return (
    <S.IconLink href={href} title={title} target='_blank'>
      {icon}
    </S.IconLink>
  );
};

export default IconLink;
