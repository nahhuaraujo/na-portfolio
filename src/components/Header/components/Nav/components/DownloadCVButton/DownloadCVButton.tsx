import * as S from './DownloadCVButton.styled';

const DownloadCVButton = () => {
  return (
    <S.DownloadCVButton
      href={'https://drive.google.com/file/d/1dc7q8P8rIZnej4gn7-15Mt_9gGLBHkIk/view?usp=share_link'}
      role='button'
      download
      target='_blank'
    >
      Descargar CV
    </S.DownloadCVButton>
  );
};

export default DownloadCVButton;
