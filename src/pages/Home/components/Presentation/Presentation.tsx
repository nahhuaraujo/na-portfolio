import * as S from './Presentation.styled';
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const navigate = useNavigate();
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
          window.open('https://forms.gle/sdAQ1UiU6PJ7SZvf7', '_blank');
        }}
      >
        Contactame
      </S.CallToAction>
    </S.Presentation>
  );
};

export default Presentation;
