import * as S from './Presentation.styled';

const Presentation = () => {
  return (
    <S.Presentation>
      <p>
        Desarrollador <span>ReactJS</span>
      </p>
      <p>
        Diseñador <span>UX/UI</span>
      </p>
      <span>Pasión por el código y el diseño</span>
      <button
        onClick={() => {
          console.log('Google forms');
        }}
      >
        Contactame
      </button>
    </S.Presentation>
  );
};

export default Presentation;
