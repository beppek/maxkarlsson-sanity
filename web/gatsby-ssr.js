/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import fs from 'fs';
import { GlobalStyles } from './src/styles/global';
import './src/styles/global.css';

function getFilesFromPath(path, extension) {
  const dir = fs.readdirSync(path);
  return dir.filter((elm) => elm.match(new RegExp(`.*.(${extension})`, 'ig')));
}

export const wrapRootElement = ({ element }) => (
  <GlobalStyles>{element}</GlobalStyles>
);

export const onRenderBody = ({ setHeadComponents }) => {
  const files = getFilesFromPath('./public/static', '.woff2');
  const preload = ['PixelOperator', 'PixelOperator-Bold', 'PixelOperator8'];

  setHeadComponents([
    files.map((file) => {
      return preload
        .map((font) => {
          const fileBeginning = file.split('-').slice(0, -1).join('-');
          if (fileBeginning === font) {
            return (
              <link
                key={font}
                rel="preload"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
                href={`/static/${file}`}
              />
            );
          }
          return false;
        })
        .filter(Boolean);
    }),
  ]);
};
