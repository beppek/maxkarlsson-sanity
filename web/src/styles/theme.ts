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
// export const accent = `#156dff`;

// font sizes
export const baseUnit = '1';
export const baseMargin = '1.5';

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
  accent: shamrock,
  baseUnit,
  baseMargin,
  primary: blue,
  secondary: offWhite,
  error: red,
  nprogress: `linear-gradient(90deg, ${pink} 0%, ${shamrock} 100%)`,
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  backgroundGradient: `linear-gradient(225deg, ${purple} 0%, ${blue} 100%)`,
};

export const mediaQueries = {
  minSmall: '(min-width: 450px)',
  maxSmall: '(max-width: 449px)',
  minMedium: '(min-width: 675px)',
  minLarge: '(min-width: 900px)',
};

export const fontSizes = {
  micro: '1.2',
  small: '1.4',
  base: '1.8',
  large: '2',
  xlarge: '3',
  xxlarge: '4',
};

export const lineHeights = {
  micro: '1,2',
  small: '2.1',
  base: '2.4',
  large: '2.7',
  xlarge: '3.2',
  xxlarge: '5.4',
};

export default theme;

export enum ThemeColors {
  accent = 'accent',
  primary = 'primary',
  header = 'header',
  background = 'background',
  foreground = 'foreground',
}

export type Theme = {
  purple: string;
  pink: string;
  green: string;
  shamrock: string;
  blue: string;
  red: string;
  orange: string;
  teal: string;
  black: string;
  grey: string;
  mediumGrey: string;
  lightgrey: string;
  offWhite: string;
  white: string;
  accent: string;
  baseUnit: string;
  baseMargin: string;
  primary: string;
  secondary: string;
  error: string;
  nprogress: string;
  maxWidth: string;
  bs: string;
  backgroundGradient: string;
};
