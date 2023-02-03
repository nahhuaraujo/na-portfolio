import * as S from './Presentation.styled';

const Presentation = () => {
  return (
    <S.Presentation>
      <p>
        <span>Nahuel Araujo</span>
      </p>
      <p>
        Desarrollador <span>ReactJS</span>
      </p>
      <p>
        Diseñador <span>UX/UI</span>
      </p>
      <span>Pasión por el código y el diseño</span>
      <button
        onClick={() => {
          console.log('To Google forms!');
        }}
      >
        Contactame
      </button>
    </S.Presentation>
  );
};

export default Presentation;
