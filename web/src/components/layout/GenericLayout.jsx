import React from 'react'
import Header from '../header/Header'

import '../../styles/layout.css'
import { GlobalStyles } from '../../styles/Global'
import { GenericContent, Footer, FooterInnerWrapper, SiteInfo } from './layout.styles'

const GenericLayout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <GenericContent>{children}</GenericContent>
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

export default GenericLayout
