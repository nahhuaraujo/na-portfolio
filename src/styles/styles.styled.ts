import { css } from 'styled-components';

export const yellow_100_value = '#feffe1';

export const font_size_100_value = '1rem';
export const font_size_200_value = '2rem';
export const font_size_300_value = '3rem';
export const font_size_400_value = '4rem';

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
`;

export const section_style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const page_style = css`
  padding: 6rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: center;
`;
