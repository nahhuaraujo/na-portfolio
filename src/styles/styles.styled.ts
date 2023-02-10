import { css } from 'styled-components';

export const yellow_100_value = '#feffe1';

export const font_size_100_value = '1rem';
export const font_size_200_value = '1.5rem';
export const font_size_300_value = '2rem';
export const font_size_400_value = '2.5rem';
export const font_size_500_value = '3rem';
export const font_size_600_value = '3.5rem';
export const font_size_700_value = '4rem';

export const navlink_style = css`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  color: ${yellow_100_value};
  text-decoration: none;
  transition: 300ms;
  :hover {
    text-decoration: underline;
  }
  :active {
    border: 2px inset ${yellow_100_value};
  }
`;

export const caption_style = css`
  width: 50%;
  font-size: ${font_size_200_value};
  span {
    font-weight: bold;
  }
  i {
    font-style: italic;
  }

  @media (width < 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const section_style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (width < 1024px) {
    flex-direction: column;
  }
`;

export const page_style = css`
  padding: 2rem 1rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const drawer_style = css`
  display: flex;
  width: 250px;
  height: 100vh;
  padding: 1rem;
  background-color: black;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  right: 0;
`;

export const fade_slide_in_left = css`
  z-index: -100;
  animation: fade-slide-in-left 1000ms cubic-bezier(0.05, -0.01, 0, 1.01);
  @keyframes fade-slide-in-left {
    0% {
      transform: translateX(-110%);
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    20% {
      opacity: 0.1;
    }
    30% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.3;
    }
    55% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.5;
    }
    65% {
      opacity: 0.6;
    }
    70% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.75;
    }
    85% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.9;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export const fade_slide_in_right = css`
  z-index: -100;
  animation: fade-slide-in-right 1000ms cubic-bezier(0.05, -0.01, 0, 1.01);
  @keyframes fade-slide-in-right {
    0% {
      transform: translateX(110%);
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    20% {
      opacity: 0.1;
    }
    30% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.3;
    }
    55% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.5;
    }
    65% {
      opacity: 0.6;
    }
    70% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.75;
    }
    85% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.9;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
