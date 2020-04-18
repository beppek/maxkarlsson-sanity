import React from 'react'
import styled from 'styled-components'

import { mediaQueries, fontSizes, lineHeights } from '../styles/theme'

import Header from './header/Header'

import '../styles/layout.css'
import { GlobalStyles } from '../styles/Global'

const ContentWrapper = styled.div`
  background: ${props => props.theme.white};
  min-height: calc(100vh - 82px - 77px);
  
  @media ${mediaQueries.minSmall} {
    min-height: calc(100vh - 82px - 77px);
  }
`

const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.offWhite};

  & a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${props => props.theme.accent};
      }
    }
  }
`

const FooterInnerWrapper = styled.div`
  box-sizing: border-box;
  max-width: ${props => props.theme.maxWidth};
  padding: 2em 1.5em 1.5em;
  margin: 0 auto;

  @media ${mediaQueries.minSmall} {
    padding: 2em 2em 2em;
  }
`

export const SiteInfo = styled.div`
  text-align: center;
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
`

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer>
        <FooterInnerWrapper>
          <SiteInfo>
            &copy; {new Date().getFullYear()} Max Karlsson
          </SiteInfo>
        </FooterInnerWrapper>
      </Footer>
    </GlobalStyles>
  </>
)

export default Layout
