import React from 'react'
import Header from '../header/Header'

import '../../styles/layout.css'
import { GlobalStyles } from '../../styles/Global'
import { LandingpageContent, Footer, FooterInnerWrapper, SiteInfo } from './layout.styles'

const LandingpageLayout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles>
      <Header landingPage siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <LandingpageContent>{children}</LandingpageContent>
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

export default LandingpageLayout
