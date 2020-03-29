import styled from 'styled-components'

import {mediaQueries} from '../../styles/theme'

export const Root = styled.div`
  position: relative;
  z-index: 100;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 960px;
  padding: 1em;
  display: flex;

  @media ${mediaQueries.minSmall} {
    padding: 0.5em;
  }
`

export const Branding = styled.div`
  font-weight: 600;
  flex: 1;
  
  & a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${props => props.theme.white};
      }
    }
    
    & svg {
      vertical-align: middle;
      height: 5rem;
    }
  }
`

export const ToggleNavButton = styled.button`
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
`

export const Nav = styled.nav`
  display: ${props => props.showNav ? 'block' : 'none'};

  & ul {
    margin: 0;
    padding: 0;
  }

  & ul li a {
    display: block;
    color: inherit;
    text-decoration: none;
    line-height: 5rem;
  }

  @media (hover: hover) {
    & ul li a:hover {
      color: ${props => props.theme.accent};
    }
  }

  @media ${mediaQueries.maxSmall} {

    position: absolute;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    box-shadow: 0 0.7rem 0.6rem rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    top: 6rem;

    & ul {
      padding: 1rem 0;
    }

    & ul li a {
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

    & ul li a {
      padding: 0.5rem;
    }
  }
`