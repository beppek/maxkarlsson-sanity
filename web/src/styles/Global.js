import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { theme } from './theme'
import { muiTheme } from './muiTheme'

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
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
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
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

export const GlobalStyles = (props) => (
  <ThemeProvider theme={theme}>
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalStyle />
      <StyledPage {...props} />
    </MUIThemeProvider>
  </ThemeProvider>
)