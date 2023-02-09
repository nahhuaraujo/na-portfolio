import BackTogether from '../../../../assets/BackTogether.png';
import { Caption, Illustration } from '../../../../components';
import * as S from './BackTogetherProject.styled';

const BackTogetherProject = () => {
  return (
    <S.BackTogetherProject>
      <Illustration>
        <a href='https://back-together.netlify.app' title='Open SkyGal app' target='_blank' rel='noopener noreferrer'>
          <img src={BackTogether} title='Open BackTogether app' width={300} />
        </a>
      </Illustration>
      <Caption>
        <span>BackTogether</span> surgió de la <span>necesidad</span> de establecer un <span>portal</span> a través del
        cual los usuarios puedan <span>reportar</span> a sus <span>mascotas</span> cuando éstas se <span>pierden</span>.
      </Caption>
    </S.BackTogetherProject>
  );
};

export default BackTogetherProject;
