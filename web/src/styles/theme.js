// colours
export const purple = '#704490';
export const pink = '#C52B86';
export const green = '#86C52B';
export const shamrock = '#2BC586';
export const blue = '#2b86c5';
export const red = '#C52B39';
export const orange = '#C56A2B';
export const teal = '#2BC5B7';
export const black = '#393939';
export const grey = '#3A3A3A';
export const mediumGrey = '#919191';
export const lightgrey = '#E1E1E1';
export const offWhite = '#EDEDED';
export const white = '#FEFEFE';
export const accent = `#156dff`

// font sizes
export const baseUnit = '1'
export const baseMargin = '1.5'

// --color-black: #202123;
//   --color-dark-gray: #32373e;
//   --color-gray: #697a90;
//   --color-light-gray: #b4bcc7;
//   --color-very-light-gray: #e7ebed;
//   --color-white: #fff;
//   --color-accent: #156dff;

export const theme = {
  purple,
  pink,
  green,
  shamrock,
  blue,
  red,
  orange,
  teal,
  black,
  grey,
  mediumGrey,
  lightgrey,
  offWhite,
  white,
  accent: blue,
  baseUnit,
  baseMargin,
  primary: teal,
  secondary: offWhite,
  error: red,
  nprogress: `linear-gradient(90deg, ${pink} 0%, ${shamrock} 100%)`,
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  backgroundGradient: `linear-gradient(225deg, ${purple} 0%, ${blue} 100%)`
};

export const mediaQueries = {
  minSmall: '(min-width: 450px)',
  maxSmall: '(max-width: 449px)',
  minMedium: '(min-width: 675px)',
  minLarge: '(min-width: 900px)'
}

export default theme;
