import styled from 'styled-components'

import {mediaQueries, fontSizes} from '../../styles/theme'

export const Root = styled.div`
  height: 7rem;
  position: relative;
  z-index: 100;
  background-color: transparent;
  /* background-color: ${props => props.theme.white}; */
  color: ${props => props.theme.primary};
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 1rem 0 2rem;
  display: flex;
  height: 100%;
  border-bottom: ${props => props.borderBottom ? `solid 1px ${props.theme.lightgrey}` : 'none'};
`

export const Branding = styled.div`
  font-weight: 600;
  flex: 1;
  
  & a {
    transition: transform .15s;
    display: inline-block;
    line-height: 6.5rem;
    color: ${props => props.landingPage ? props.theme.black : 'inherit'};
    text-decoration: none;
    font-size: ${fontSizes.xlarge}rem;
    
    @media (hover: hover) {
      &:hover {
        color: ${props => props.landingPage ? props.theme.black : 'inherit'};
        transform: rotate(-5deg);
      }
    }
    
    & svg {
      vertical-align: middle;
      height: 5rem;
      fill: ${props => props.landingPage ? props.theme.black : props.theme.primary};
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
  width: 300px;
  
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
    color: ${props => props.landingPage ? props.theme.black : props.theme.primary};
    text-decoration: none;
    transition: transform .15s;
    padding: 0;
    font-size: ${fontSizes.large}rem;
  }

  @media (hover: hover) {
    & ul li a:hover {
      transform: scale(1.1) rotate3d(1,1,1, 5deg);
      /* background-color: ${props => props.landingPage ? 'transparent' : props.theme.primary}; */
      /* ${props => !props.landingPage && `color: ${props.theme.white}`}; */
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
  }
`