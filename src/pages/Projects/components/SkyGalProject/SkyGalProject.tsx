import * as S from './SkyGalProject.styled';
import { Caption, Illustration } from '../../../../components';

const SkyGalProject = () => {
  return (
    <S.SkyGalProject>
      <Caption align='right'>
        <span>SkyGal</span> se trata de una colaboración que realicé con <span>Carolina Muguruza</span>, fotógrafa
        amateur y compañera de vida, quien supo capturar <span>bellísimas imágenes del cielo</span> para dar forma a
        ésta aplicación dedicada a <span>compartir</span> sus fotos de un <span>modo virtual</span>.
      </Caption>
      <Illustration>
        <svg width='300' height='220' viewBox='0 0 300 220' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M275 179.08H273.515C277.275 179.08 280.32 175.97 280.32 172.135V6.945C280.32 3.105 277.275 0 273.515 0H26.625C22.865 0 19.815 3.105 19.815 6.945V172.14C19.815 175.975 22.865 179.085 26.625 179.085H25L0 203.345C0 211.67 6.74 220 14.985 220H285.02C292.795 220 300 211.69 300 203.34L275 179.08ZM150.07 3.875C150.592 3.85594 151.112 3.94218 151.599 4.12855C152.087 4.31492 152.532 4.59761 152.907 4.95974C153.283 5.32186 153.582 5.75601 153.787 6.23626C153.991 6.7165 154.096 7.23299 154.097 7.75491C154.097 8.27682 153.992 8.79345 153.789 9.27396C153.585 9.75446 153.286 10.189 152.911 10.5516C152.536 10.9142 152.091 11.1975 151.604 11.3845C151.117 11.5715 150.597 11.6584 150.075 11.64C149.069 11.6046 148.117 11.1803 147.418 10.4566C146.719 9.73289 146.327 8.76616 146.327 7.75991C146.326 6.75367 146.716 5.78642 147.414 5.06181C148.112 4.33719 149.064 3.91173 150.07 3.875ZM27.025 184.08H272.97L287.66 198.34H177.71L175.72 195.7H124.42L122.425 198.34H12.33L27.025 184.08ZM171.58 214.19H128.41C126.93 214.19 122.99 214.19 122.99 209.15H177.005C177.005 214.19 172.985 214.19 171.58 214.19Z'
            fill='black'
          />
        </svg>
      </Illustration>
    </S.SkyGalProject>
  );
};

export default SkyGalProject;
