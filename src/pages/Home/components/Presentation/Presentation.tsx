import * as S from './Presentation.styled';

const Presentation = () => {
  return (
    <S.Presentation>
      <S.Title>Nahuel Araujo</S.Title>
      <S.Subtitle>
        Desarrollador <span>ReactJS</span> <br />
        Diseñador <span>UX/UI</span>
      </S.Subtitle>
      <S.Lead>Pasión por el código y el diseño</S.Lead>
      <S.CallToAction
        onClick={() => {
          console.log('To Google forms!');
        }}
      >
        Contactame
      </S.CallToAction>
    </S.Presentation>
  );
};

export default Presentation;
