import styled from 'styled-components';
import { mediaQueries, fontSizes, lineHeights, Theme } from '../styles/theme';

export const H1 = styled.h1<{ theme: Theme }>`
  font-size: ${fontSizes.xxlarge}rem;
  line-height: ${lineHeights.xxlarge}rem;
  color: ${(props) => props.color || 'inherit'};
`;

export const H2 = styled.h2<{ theme: Theme; fontSize?: string }>`
  font-size: ${(props) =>
    `${props.fontSize ? fontSizes[props.fontSize] : fontSizes.xlarge}rem`};
  line-height: ${lineHeights.xlarge}rem;
  color: ${(props) => props.color || 'inherit'};
`;

export const H3 = styled.h3`
  font-size: ${fontSizes.large}rem;
  line-height: ${lineHeights.large}rem;
  color: ${(props) => props.color || 'inherit'};
`;

export const Paragraph = styled.p<{ theme: Theme; fontSize?: string }>`
  margin: 0.5rem 0 1rem 0;
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) =>
    `${props.fontSize ? fontSizes[props.fontSize] : fontSizes.base}rem`};

  @media ${mediaQueries.minMedium} {
    font-size: ${(props) =>
      `${props.fontSize ? fontSizes[props.fontSize] : fontSizes.large}rem`};
    line-height: 2.7rem;
  }
`;
