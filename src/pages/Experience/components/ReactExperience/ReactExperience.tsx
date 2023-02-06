import * as S from './ReactExperience.styled';
import { Caption, Illustration } from '../../../../components';

const ReactExperience = () => {
  return (
    <S.ReactExperience>
      <Illustration>
        <svg width='268' height='200' viewBox='0 0 268 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M83.9598 163.95L76.6673 171.233C76.2402 171.691 75.7237 172.057 75.1497 172.307C74.5757 172.558 73.9563 172.689 73.3298 172.692C72.7033 172.689 72.084 172.558 71.51 172.307C70.936 172.057 70.4195 171.691 69.9923 171.233L2.02416 103.35C1.56523 102.924 1.19917 102.408 0.948848 101.835C0.698531 101.261 0.569336 100.642 0.569336 100.017C0.569336 99.391 0.698531 98.772 0.948848 98.1985C1.19917 97.625 1.56523 97.1091 2.02416 96.6833L69.9339 28.7749C70.3611 28.3172 70.8776 27.9517 71.4516 27.7008C72.0256 27.45 72.6449 27.3193 73.2714 27.3166C73.8979 27.3193 74.5173 27.45 75.0913 27.7008C75.6653 27.9517 76.1818 28.3172 76.6089 28.7749L83.9014 36.0583C84.3603 36.4841 84.7264 36.9999 84.9767 37.5735C85.227 38.147 85.3562 38.766 85.3562 39.3916C85.3562 40.0173 85.227 40.6362 84.9767 41.2097C84.7264 41.7833 84.3603 42.2991 83.9014 42.7249L26.5798 99.9749L83.9014 157.225C84.7941 158.058 85.3532 159.242 85.3532 160.558V160.65C85.3546 161.267 85.2312 161.878 84.9904 162.447C84.7495 163.015 84.3961 163.53 83.9514 163.958L83.9598 163.95ZM170.142 8.52495L115.741 196.575C115.395 197.773 114.592 198.787 113.505 199.4L113.48 199.408C112.968 199.72 112.393 199.913 111.797 199.975C111.201 200.037 110.599 199.966 110.034 199.767L110.059 199.775L101.014 197.3C99.815 196.954 98.7993 196.152 98.1859 195.067L98.1775 195.042C97.8626 194.502 97.6675 193.902 97.6056 193.281C97.5437 192.659 97.6164 192.032 97.8187 191.442L97.8104 191.475L152.212 3.42495C152.558 2.22706 153.361 1.21267 154.448 0.599946L154.473 0.591612C154.985 0.280274 155.559 0.0865936 156.155 0.0246151C156.751 -0.0373633 157.354 0.0339143 157.919 0.233279L157.894 0.224946L166.938 2.69995C168.165 3.05828 169.166 3.86661 169.767 4.93328L169.775 4.95828C170.09 5.49749 170.285 6.09808 170.347 6.71926C170.409 7.34044 170.336 7.96764 170.134 8.55828L170.142 8.52495ZM265.962 103.35L197.994 171.225C197.566 171.688 197.048 172.057 196.47 172.309C195.893 172.562 195.27 172.692 194.64 172.692C194.009 172.692 193.386 172.562 192.809 172.309C192.231 172.057 191.713 171.688 191.285 171.225L183.993 163.942C183.53 163.515 183.16 162.997 182.907 162.42C182.655 161.844 182.524 161.221 182.524 160.592C182.524 159.962 182.655 159.34 182.907 158.763C183.16 158.186 183.53 157.668 183.993 157.242L241.315 99.9916L183.993 42.7416C183.53 42.3148 183.16 41.7967 182.907 41.2202C182.655 40.6436 182.524 40.021 182.524 39.3916C182.524 38.7622 182.655 38.1396 182.907 37.563C183.16 36.9865 183.53 36.4685 183.993 36.0416L191.285 28.7583C191.713 28.2957 192.231 27.9265 192.809 27.6741C193.386 27.4216 194.009 27.2912 194.64 27.2912C195.27 27.2912 195.893 27.4216 196.47 27.6741C197.048 27.9265 197.566 28.2957 197.994 28.7583L265.962 96.6416C266.425 97.0685 266.795 97.5865 267.048 98.163C267.3 98.7396 267.431 99.3622 267.431 99.9916C267.431 100.621 267.3 101.244 267.048 101.82C266.795 102.397 266.425 102.915 265.962 103.342V103.35Z'
            fill='black'
          />
        </svg>
      </Illustration>
      <Caption>
        Hoy en día, ya con <span>2 años y 7 meses de experiencia</span> del lado del front, me dedico al{' '}
        <span>desarrollo de aplicaciones web</span> utilizando <span>ReactJS</span> para crear interfaces de usuario, y{' '}
        <span>Atomic Design</span> como sistema de diseño.
      </Caption>
    </S.ReactExperience>
  );
};

export default ReactExperience;
