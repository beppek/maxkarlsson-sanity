import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Provider } from '../state/context';
import { theme, fontSizes } from './theme';
import {
  PixelOperatorWoff,
  PixelOperatorWoff2,
  PixelOperatorBoldWoff,
  PixelOperatorBoldWoff2,
  PixelOperator8Woff,
  PixelOperator8Woff2,
} from './fonts';

const StyledPage = styled.div`
  background: ${theme.white};
  color: ${theme.black};
`;

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Pixel Operator';
    src: url('${PixelOperatorBoldWoff2}') format('woff2'),
      url('${PixelOperatorBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pixel Operator';
    src: url('${PixelOperatorWoff2}') format('woff2'),
      url('${PixelOperatorWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pixel Operator 8';
    src: url('${PixelOperator8Woff2}') format('woff2'),
      url('${PixelOperator8Woff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px; 
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Pixel Operator', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
    font-size: ${fontSizes.base}rem;
    line-height: 2,4;
  }
  h1,h2,h3,h4,h5,h6 {
    text-transform: uppercase;
  }
  h1 {
    font-size: ${fontSizes.xxlarge}rem;
  }
  h2 {
    font-size: ${fontSizes.xlarge}rem;
  }
  h3 {
    font-size: ${fontSizes.large}rem;
  }

  a {
    text-decoration: none;
    color: ${theme.accent};
    transition: color ease-in 0.2s;
    
    &:hover {
      color: ${theme.primary};
      transition: ease color 0.2s;
    }
  }
  #nprogress .bar {
    background: ${theme.nprogress};
  }
  #nprogress .spinner-icon {
    border-top-color: ${theme.nprogress};
    border-left-color: ${theme.nprogress};
  }

`;

export const GlobalStyles = (props: any) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider>
        <StyledPage {...props} />
      </Provider>
    </ThemeProvider>
  </>
);
