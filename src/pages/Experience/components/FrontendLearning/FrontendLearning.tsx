import { Caption, Illustration } from '../../../../components';
import * as S from './FrontendLearning.styled';

const FrontendLearning = () => {
  return (
    <S.FrontendLearning>
      <Illustration>
        <svg width='300' height='234' viewBox='0 0 300 234' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M300 0.257812H56.25V73.2216H0V233.742H131.25V189.964H300V0.257812ZM112.5 14.8506H281.25V29.4433H112.5V14.8506ZM75 14.8506H93.75V29.4433H75V14.8506ZM75 219.149H56.25V204.556H75V219.149ZM112.5 189.964H18.75V87.8144H112.5V189.964ZM281.25 175.371H131.25V73.2216H75V44.0361H281.25V175.371Z'
            fill='black'
          />
        </svg>
      </Illustration>
      <Caption>
        Durante éste período inicial, estudié tecnologías del <span>lado del cliente</span> como <span>HTML</span>,{' '}
        <span>CSS</span>, y <span>JavaScript</span>, desarrollando un gusto especial por ellas.
      </Caption>
    </S.FrontendLearning>
  );
};

export default FrontendLearning;
