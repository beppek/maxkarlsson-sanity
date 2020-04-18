import styled from 'styled-components'

import { mediaQueries, fontSizes, lineHeights } from '../../styles/theme'

export const GenericContent = styled.div`
  background: ${props => props.theme.white};
  min-height: calc(100vh - 82px - 77px);
  
  @media ${mediaQueries.minSmall} {
    min-height: calc(100vh - 82px - 77px);
  }
`

export const LandingpageContent = styled.div`
  min-height: 100vh;
  margin-top: -7rem;
`

export const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.offWhite};

  & a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${props => props.theme.primary};
      }
    }
  }
`

export const FooterInnerWrapper = styled.div`
  box-sizing: border-box;
  max-width: ${props => props.theme.maxWidth};
  padding: 3rem 2rem 3rem;
  margin: 0 auto;

  @media ${mediaQueries.minSmall} {
    padding: 3rem 3rem 3rem;
  }
`

export const SiteInfo = styled.div`
  text-align: center;
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
`

export const HorizontalSpacer = styled.div`
  height: ${props => props.height};
  width: 100%;
`

export const CenteredText = styled.div`
  display: flex;
  height: 100%;
  & h1, h2, h3, h4, h5, h6, p {
    margin: auto; /* Important */ 
    text-align: center; 
  }
`