import SkyGalGallery from '../../../../assets/SkyGal-Gallery.png';
import { Caption, Illustration } from '../../../../components';
import * as S from './SkyGalProject.styled';

const SkyGalProject = () => {
  return (
    <S.SkyGalProject>
      <Caption align='right'>
        <span>SkyGal</span> se trata de una colaboración que realicé con <span>Carolina Muguruza</span>,{' '}
        <i>fotógrafa amateur y compañera de vida</i>, quien supo capturar <span>bellísimas imágenes del cielo</span>{' '}
        para dar forma a ésta aplicación dedicada a <span>compartir</span> sus fotos de un <span>modo virtual</span>.
      </Caption>
      <Illustration>
        <a href='https://sky-gal.netlify.app' title='Open SkyGal app' target='_blank' rel='noopener noreferrer'>
          <img src={SkyGalGallery} alt='SkyGal' width={300} />
        </a>
      </Illustration>
    </S.SkyGalProject>
  );
};

export default SkyGalProject;
