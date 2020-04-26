import styled, { css } from 'styled-components';

import { mediaQueries, fontSizes, Theme } from '../../styles/theme';

export const Root = styled.div<{ theme: Theme }>`
  height: 7rem;
  position: relative;
  z-index: 100;
  background-color: transparent;
`;

type WrapperProps = {
  theme: Theme;
  backgroundColor?: string;
  foregroundColor?: string;
  accentColor?: string;
  showNav: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  font-family: 'Pixel Operator 8';
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  height: 100%;
  background: ${(props) => props.backgroundColor || 'transparent'};

  @media ${mediaQueries.maxSmall} {
    ${(props) =>
      props.showNav &&
      css`
        background: ${props.theme.black};
        color: ${props.theme.white};

        & a,
        div a,
        nav ul li a {
          & svg {
            fill: ${props.theme.white};
          }
          color: ${props.theme.white};
        }
      `}
  }

  & a {
    color: ${(props) => props.foregroundColor || props.theme.black};
  }
  & svg {
    fill: ${(props) => props.foregroundColor || props.theme.black};
  }
  & div a {
    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.foregroundColor || props.theme.black};
      }
    }
  }
  & nav ul li {
    transition: background 0.2s;
    @media (hover: hover) {
      &:hover {
        background: ${(props) => props.foregroundColor || 'transparent'};
        & a {
          color: ${(props) => props.accentColor || props.theme.primary};
        }
      }
    }
  }
`;

type BrandingProps = {
  landingPage?: boolean;
  theme: Theme;
};

export const Branding = styled.div<BrandingProps>`
  font-weight: 600;
  flex: 1;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & a {
    transition: transform 0.15s;
    display: inline-block;
    line-height: 7rem;
    text-decoration: none;
    font-size: ${fontSizes.base}rem;

    @media (hover: hover) {
      &:hover {
        transform: rotate(-5deg);
      }
    }

    & svg {
      vertical-align: middle;
      height: 4rem;
    }
  }
`;

export const ToggleNavButton = styled.button<React.HTMLAttributes<HTMLElement>>`
  appearance: none;
  font-size: 2.5rem;
  border: none;
  background: none;
  margin: 0;
  padding: calc(14 / 17 / 2 * 0.6rem);
  outline: none;
  color: inherit;

  & svg {
    display: block;
    fill: inherit;
  }

  @media ${mediaQueries.minSmall} {
    display: none;
  }
`;

type NavProps = {
  showNav?: boolean;
  theme: Theme;
  landingPage?: boolean;
};

export const Nav = styled.nav<NavProps>`
  display: ${(props) => (props.showNav ? 'block' : 'none')};
  width: 300px;
  font-weight: 600;

  & ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  & ul li {
    width: 100%;
  }

  & ul li a {
    line-height: 7rem;
    text-align: center;
    display: block;
    text-decoration: none;
    transition: transform 0.15s;
    padding: 0;
    font-size: ${fontSizes.base}rem;
  }

  @media (hover: hover) {
    & ul li a:hover {
      transform: scale(1.2);
    }
  }

  @media ${mediaQueries.maxSmall} {
    position: absolute;
    width: 100%;
    background: ${(props: NavProps) => props.theme.black};
    color: ${(props: NavProps) => props.theme.white};
    box-shadow: 0 0.7rem 0.6rem rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    top: 7rem;

    & ul {
      padding: 0;
    }

    & > ul li {
      border-top: 1px solid ${(props) => props.theme.offWhite}50;
    }

    & ul li a {
      color: ${(props: NavProps) => props.theme.white};
      padding: 0.5rem 1rem;
    }
  }

  @media ${mediaQueries.minSmall} {
    display: block;

    & ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
