import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { theme, Theme, fontSizes } from './theme';
import { muiTheme } from './mui-theme';
import { Provider } from '../state/context';

const StyledPage = styled.div<{ theme: Theme }>`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`;

const GlobalStyle = createGlobalStyle`
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

  @font-face {
      font-family: 'Pixel Operator';
      src: url('/fonts/PixelOperator-Bold.woff2') format('woff2'),
          url('/fonts/PixelOperator-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
    font-family: 'Pixel Operator Mono 8';
    src: url('/fonts/PixelOperatorMono8-Bold.woff2') format('woff2'),
        url('/fonts/PixelOperatorMono8-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator Mono';
      src: url('/fonts/PixelOperatorMono.woff2') format('woff2'),
          url('/fonts/PixelOperatorMono.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  

  @font-face {
      font-family: 'Pixel Operator Mono 8';
      src: url('/fonts/PixelOperatorMono8.woff2') format('woff2'),
          url('/fonts/PixelOperatorMono8.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator SC';
      src: url('/fonts/PixelOperatorSC-Bold.woff2') format('woff2'),
          url('/fonts/PixelOperatorSC-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator HB';
      src: url('/fonts/PixelOperatorHB.woff2') format('woff2'),
          url('/fonts/PixelOperatorHB.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator HB 8';
      src: url('/fonts/PixelOperatorHB8.woff2') format('woff2'),
          url('/fonts/PixelOperatorHB8.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator Mono HB 8';
      src: url('/fonts/PixelOperatorMonoHB8.woff2') format('woff2'),
          url('/fonts/PixelOperatorMonoHB8.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator';
      src: url('/fonts/PixelOperator.woff2') format('woff2'),
          url('/fonts/PixelOperator.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator 8';
      src: url('/fonts/PixelOperator8.woff2') format('woff2'),
          url('/fonts/PixelOperator8.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator SC';
      src: url('/fonts/PixelOperatorSC.woff2') format('woff2'),
          url('/fonts/PixelOperatorSC.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator Mono';
      src: url('/fonts/PixelOperatorMono-Bold.woff2') format('woff2'),
          url('/fonts/PixelOperatorMono-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator Mono HB';
      src: url('/fonts/PixelOperatorMonoHB.woff2') format('woff2'),
          url('/fonts/PixelOperatorMonoHB.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator 8';
      src: url('/fonts/PixelOperator8-Bold.woff2') format('woff2'),
          url('/fonts/PixelOperator8-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pixel Operator HB SC';
      src: url('/fonts/PixelOperatorHBSC.woff2') format('woff2'),
          url('/fonts/PixelOperatorHBSC.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }


`;

export const GlobalStyles = (props: any) => (
  <ThemeProvider theme={theme}>
    <MUIThemeProvider theme={muiTheme}>
      <Provider>
        <CssBaseline />
        <GlobalStyle />
        <StyledPage {...props} />
      </Provider>
    </MUIThemeProvider>
  </ThemeProvider>
);
