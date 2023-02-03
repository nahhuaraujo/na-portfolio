import * as S from './Description.styled';
import { Caption, Illustration } from '../../../../components';

const Description = () => {
  return (
    <S.Description>
      <Caption align='right'>
        Soy un desarrollador <span>autodidacta</span>, <span>curioso</span> y <span>detallista</span>, quien disfruta
        del <span>trabajo en equipo</span>, la <span>investigación</span> y el <span>aprendizaje</span>.
      </Caption>
      <Illustration>
        <svg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M149.985 0L138.861 40.737C138.116 42.3398 137.73 44.0856 137.729 45.853C137.729 52.6112 143.207 58.0906 149.966 58.0906C156.724 58.0906 162.203 52.6124 162.203 45.8536C162.203 45.3961 162.175 44.9474 162.126 44.5031H162.14L162.108 44.3888C161.966 43.1938 161.647 42.0266 161.162 40.9252L149.986 0.000635174L149.985 0ZM225.111 20.0152L195.743 49.1031C191.911 51.1711 189.307 55.2206 189.307 59.879C189.307 66.6365 194.787 72.1154 201.545 72.1154C201.969 72.1154 202.388 72.0937 202.801 72.0518C207.723 75.3991 212.319 79.2025 216.528 83.4118C253.308 120.191 253.306 179.641 216.528 216.42C212.32 220.627 207.725 224.429 202.805 227.776C202.392 227.734 201.974 227.712 201.55 227.712C194.791 227.712 189.312 233.193 189.312 239.95C189.312 244.403 191.7 248.288 195.255 250.43L224.931 279.824L213.145 234.988C217.314 231.889 221.251 228.49 224.925 224.818L229.125 220.617L228.912 220.406C230.96 218.112 232.907 215.731 234.748 213.269L279.907 225.14L247.095 192.013C251.217 182.504 253.923 172.441 255.125 162.146L300 149.892L255.157 137.647C253.994 127.449 251.352 117.475 247.313 108.038L279.873 75.1646L235.184 86.911C228.998 78.5636 221.624 71.1667 213.295 64.9556L225.108 20.0133L225.111 20.0152ZM74.9307 20.0183L85.8059 61.3954C85.9444 62.5139 86.2266 63.5879 86.6461 64.5933L86.7433 64.9632C82.6317 68.0289 78.747 71.3877 75.1195 75.0133C71.4127 78.7198 67.9851 82.6952 64.8646 86.9072L20.1005 75.1411L52.7095 108.062C48.6691 117.491 46.0197 127.457 44.8442 137.648L0 149.894L44.8391 162.138C46.0261 172.455 48.7231 182.541 52.8436 192.074L20.0668 225.166L65.1588 213.315C71.2919 221.518 78.5791 228.791 86.7941 234.908C86.137 236.351 85.7685 237.908 85.7093 239.492L75.1099 279.82L106.194 249.031L106.17 248.98C108.623 246.743 110.172 243.531 110.172 239.949C110.172 233.191 104.693 227.712 97.9343 227.712C97.6833 227.712 97.4348 227.721 97.1869 227.737C92.2873 224.4 87.7114 220.61 83.5193 216.419C46.74 179.64 46.74 120.19 83.5193 83.4099C87.7129 79.2177 92.2905 75.4282 97.192 72.0912C97.4399 72.1052 97.689 72.1141 97.9407 72.1141C104.699 72.1141 110.177 66.6359 110.177 59.8777C110.177 55.9248 108.294 52.4192 105.385 50.1822L74.9314 20.019L74.9307 20.0183ZM155.92 77.1328V108.286L177.275 120.547L206.624 104.63L155.92 77.1322V77.1328ZM144.042 77.3311L93.3763 104.631L122.808 120.491L144.043 108.376V77.3311H144.042ZM87.3877 114.896V187.353L116.842 171.481V130.767L87.3877 114.896ZM212.577 114.913L183.126 130.886V171.369L212.577 187.343V114.913ZM150.062 118.618L128.719 130.793V171.648L150.062 183.826L171.248 171.659V130.783L150.062 118.619V118.618ZM177.442 181.799L155.921 194.157V224.062L205.644 197.095L177.442 181.799ZM122.634 181.852L94.3563 197.09L144.043 223.862V194.066L122.634 181.852V181.852ZM149.965 241.74C143.207 241.74 137.729 247.22 137.729 253.978C137.729 255.719 138.098 257.373 138.755 258.873L149.985 300L161.289 258.615C161.651 257.731 161.902 256.797 162.05 255.826L162.088 255.68H162.071C162.149 255.122 162.203 254.557 162.203 253.978C162.203 247.22 156.725 241.74 149.966 241.74H149.965Z'
            fill='black'
          />
        </svg>
      </Illustration>
    </S.Description>
  );
};

export default Description;