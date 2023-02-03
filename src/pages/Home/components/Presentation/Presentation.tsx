import { useNavigate } from 'react-router-dom';
import * as S from './Presentation.styled';

const Presentation = () => {
  const navigate = useNavigate();
  return (
    <S.Presentation>
      <p>
        Desarrollador <span>ReactJS</span>
      </p>
      <p>
        Diseñador <span>UX/UI</span>
      </p>
      <button
        onClick={() => {
          navigate('/contacto');
        }}
      >
        Contactar
      </button>
    </S.Presentation>
  );
};

export default Presentation;
