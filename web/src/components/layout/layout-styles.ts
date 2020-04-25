import styled, { keyframes } from 'styled-components';

import {
  theme,
  mediaQueries,
  fontSizes,
  lineHeights,
} from '../../styles/theme';

export const GenericContent = styled.div`
  background: ${(props) => props.theme.white};
  min-height: calc(100vh - 82px - 77px);

  @media ${mediaQueries.minSmall} {
    min-height: calc(100vh - 82px - 77px);
  }
`;

export const LandingpageContent = styled.div`
  min-height: 100vh;
  margin-top: -7rem;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.offWhite};

  & a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;

export const FooterInnerWrapper = styled.div`
  box-sizing: border-box;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 3rem 2rem 3rem;
  margin: 0 auto;

  @media ${mediaQueries.minSmall} {
    padding: 3rem 3rem 3rem;
  }
`;

export const SiteInfo = styled.div`
  text-align: center;
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
`;

export const HorizontalSpacer = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  width: 100%;
`;

export const blink = keyframes`
  from,
  to {
    color: transparent;
  }
  50% {
    color: ${theme.mediumGrey};
  }
`;

export const CenteredText = styled.div<{ backgroundColor?: string }>`
  display: flex;
  height: 100%;
  & div {
    max-width: 600px;
    & div:first-of-type {
      border-radius: 2px 2px 0 0;
      background-color: ${(props) => props.backgroundColor || 'inherit'};
      color: ${(props) =>
        props.backgroundColor ? props.theme.white : 'inherit'};
    }

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      padding: 0;
      margin: 0;
    }
    padding: 2rem 3rem;
    margin: auto;
    text-align: center;
    & div:not(:first-of-type) {
      display: block;
      border-radius: 0 0 2px 2px;
      background-color: ${(props) => props.theme.white};
      color: 'inherit';
      padding: 2rem 3rem;
      margin: auto;
      text-align: left;
      border: ${(props) =>
        props.backgroundColor
          ? `5px solid ${props.backgroundColor}`
          : 'inherit'};

      & span {
        font-size: ${fontSizes.xlarge}rem;
        color: ${(props) => props.theme.black};
        animation: ${blink} 1.1s step-end infinite;
      }
    }
  }
`;
