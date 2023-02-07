import * as S from './DownloadCVButton.styled';

interface IProps {
  closeDrawer: () => void;
}
const DownloadCVButton = ({ closeDrawer }: IProps) => {
  return (
    <S.DownloadCVButton
      href={'https://drive.google.com/file/d/1tbTiJSJ2A-RSf4Npn29VkYvxbpcsdBnT/view'}
      role='button'
      download
      target='_blank'
      onClick={closeDrawer}
    >
      Descargar CV
    </S.DownloadCVButton>
  );
};

export default DownloadCVButton;
