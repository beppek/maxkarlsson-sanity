/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { GlobalStyles } from './src/styles/global';

export const wrapRootElement = ({ element }) => (
  <GlobalStyles>{element}</GlobalStyles>
);
