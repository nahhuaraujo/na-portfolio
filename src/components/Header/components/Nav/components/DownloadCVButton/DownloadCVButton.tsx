import * as S from './DownloadCVButton.styled';

const DownloadCVButton = () => {
  return (
    <S.DownloadCVButton
      href='./../../../../../../assets/Nahuel Araujo - CV 2023.pdf'
      role='button'
      download
      target='_blank'
    >
      Descargar CV
    </S.DownloadCVButton>
  );
};

export default DownloadCVButton;
