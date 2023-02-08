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
  padding: 0 1rem;
  padding-top: 4rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
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
