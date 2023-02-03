import * as S from './UILearning.styled';
import { Caption, Illustration } from '../../../../components';

const UILearning = () => {
  return (
    <S.UILearning>
      <Caption align='right'>
        Luego de usar varias librerías de <span>desarrollo UI</span>, conocí <span>ReactJS</span>, tecnología que me{' '}
        <span>apasionó</span>, y sería con la que trabajaría <span>de ahí en adelante</span>.
      </Caption>
      <Illustration>
        <svg width='300' height='264' viewBox='0 0 300 264' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M245.039 85.8281C241.875 84.7734 238.711 83.7773 235.547 82.8398C236.074 80.6719 236.543 78.5039 237.012 76.3359C244.219 41.4141 239.473 13.3477 223.477 4.08984C208.066 -4.75782 182.93 4.4414 157.5 26.5898C154.98 28.7578 152.52 31.043 150.176 33.3281C148.594 31.8047 146.953 30.2812 145.312 28.8164C118.652 5.14453 91.9336 -4.81641 75.9375 4.5C60.5859 13.4062 56.0156 39.832 62.4609 72.8789C63.1055 76.1602 63.8086 79.3828 64.6289 82.6641C60.8789 83.7187 57.1875 84.8906 53.7305 86.1211C22.4414 96.9609 0 114.07 0 131.766C0 150.047 23.9063 168.387 56.4258 179.52C59.0625 180.398 61.6992 181.277 64.3945 182.039C63.5156 185.555 62.7539 189.012 62.0508 192.586C55.8984 225.105 60.7031 250.887 76.0547 259.734C91.875 268.875 118.477 259.5 144.375 236.824C146.426 235.008 148.477 233.133 150.527 231.141C153.105 233.66 155.801 236.062 158.496 238.406C183.574 259.969 208.359 268.699 223.652 259.852C239.473 250.711 244.629 222.996 237.949 189.246C237.422 186.668 236.836 184.031 236.191 181.336C238.066 180.809 239.883 180.223 241.699 179.637C275.508 168.445 300 150.34 300 131.766C300 114.012 276.914 96.7851 245.039 85.8281ZM165.762 36.082C187.559 17.0977 207.891 9.65625 217.148 14.9883C227.051 20.6719 230.859 43.6406 224.648 73.8164C224.238 75.8086 223.828 77.7422 223.301 79.6758C210.293 76.7461 197.109 74.6367 183.867 73.4648C176.25 62.5664 167.93 52.1367 158.906 42.3516C161.191 40.1836 163.418 38.1328 165.762 36.082ZM97.9687 162.176C100.957 167.273 104.004 172.371 107.227 177.352C98.0859 176.355 89.0039 174.891 80.0391 172.957C82.6172 164.52 85.8398 155.789 89.5898 146.883C92.2852 152.039 95.0391 157.137 97.9687 162.176ZM80.2148 91.6875C88.6523 89.8125 97.6172 88.2891 106.934 87.1172C103.828 91.9805 100.781 96.9609 97.9102 102C95.0391 106.98 92.2266 112.078 89.5898 117.234C85.8984 108.504 82.793 99.9492 80.2148 91.6875ZM96.2695 132.059C100.137 123.973 104.355 116.062 108.809 108.27C113.262 100.477 118.066 92.918 123.105 85.4766C131.895 84.832 140.859 84.4805 150 84.4805C159.141 84.4805 168.164 84.832 176.895 85.4766C181.875 92.8594 186.621 100.418 191.133 108.152C195.645 115.887 199.863 123.797 203.848 131.824C199.922 139.91 195.703 147.879 191.191 155.73C186.738 163.523 181.992 171.082 177.012 178.582C168.281 179.227 159.199 179.52 150 179.52C140.801 179.52 131.895 179.227 123.281 178.699C118.184 171.258 113.379 163.641 108.867 155.848C104.355 148.055 100.195 140.145 96.2695 132.059ZM202.09 162.059C205.078 156.902 207.891 151.687 210.645 146.414C214.395 154.91 217.676 163.523 220.547 172.371C211.465 174.422 202.266 176.004 193.008 177.059C196.172 172.137 199.16 167.098 202.09 162.059ZM210.527 117.234C207.773 112.078 204.961 106.922 202.031 101.883C199.16 96.9023 196.172 91.9805 193.066 87.1172C202.5 88.2891 211.523 89.8711 219.961 91.8047C217.266 100.477 214.102 108.914 210.527 117.234ZM150.117 51.3164C156.27 57.9961 162.07 65.0273 167.461 72.293C155.859 71.7656 144.199 71.7656 132.598 72.293C138.34 64.7344 144.258 57.7031 150.117 51.3164ZM82.1484 15.3984C91.9922 9.65625 113.848 17.8594 136.875 38.25C138.34 39.5391 139.805 40.9453 141.328 42.3516C132.246 52.1367 123.867 62.5664 116.191 73.4648C102.949 74.6367 89.8242 76.6875 76.8164 79.5586C76.0547 76.5703 75.4102 73.5234 74.7656 70.4766C69.2578 42.1172 72.8906 20.7305 82.1484 15.3984ZM67.793 169.852C65.332 169.148 62.9297 168.387 60.5273 167.566C48.0469 163.641 33.8672 157.43 23.6133 149.285C17.6953 145.184 13.7109 138.855 12.5977 131.766C12.5977 121.043 31.1133 107.332 57.832 98.0156C61.1719 96.8437 64.5703 95.7891 67.9688 94.793C71.9531 107.508 76.7578 119.988 82.3242 132.059C76.6992 144.305 71.8359 156.961 67.793 169.852ZM136.113 227.273C126.445 236.121 115.254 243.152 103.066 247.957C96.5625 251.062 89.0625 251.355 82.3828 248.719C73.0664 243.328 69.1992 222.645 74.4727 194.812C75.1172 191.531 75.8203 188.25 76.6406 185.027C89.7656 187.84 103.008 189.773 116.426 190.77C124.16 201.727 132.656 212.215 141.738 222.059C139.863 223.875 137.988 225.633 136.113 227.273ZM150.469 213.035C144.492 206.59 138.516 199.441 132.715 191.766C138.34 192 144.141 192.117 150 192.117C156.035 192.117 161.953 192 167.812 191.707C162.422 199.148 156.621 206.238 150.469 213.035ZM227.051 230.613C226.523 237.762 223.008 244.441 217.383 248.953C208.066 254.344 188.203 247.312 166.758 228.914C164.297 226.805 161.836 224.52 159.316 222.176C168.281 212.273 176.543 201.785 184.043 190.77C197.461 189.656 210.82 187.605 224.004 184.617C224.59 187.02 225.117 189.422 225.586 191.766C228.457 204.422 228.926 217.605 227.051 230.613ZM237.715 167.625C236.074 168.152 234.434 168.68 232.734 169.148C228.633 156.375 223.594 143.895 217.793 131.766C223.418 119.812 228.164 107.508 232.148 94.9101C235.195 95.7891 238.125 96.7266 240.938 97.6641C268.242 107.039 287.402 120.984 287.402 131.648C287.402 143.133 266.953 157.957 237.715 167.625ZM150 158.836C164.824 158.836 176.836 146.824 176.836 132C176.836 117.176 164.824 105.164 150 105.164C135.176 105.164 123.164 117.176 123.164 132C123.164 146.824 135.176 158.836 150 158.836Z'
            fill='black'
          />
        </svg>
      </Illustration>
    </S.UILearning>
  );
};

export default UILearning;