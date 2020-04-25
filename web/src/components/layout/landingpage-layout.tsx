import React, { ReactElement } from 'react';
import Header from '../header/header';

// import { GlobalStyles } from '../../styles/global';
import {
  LandingpageContent,
  Footer,
  FooterInnerWrapper,
  SiteInfo,
} from './layout-styles';

type Props = {
  children: ReactElement[] | ReactElement;
  onHideNav: Function;
  onShowNav: Function;
  showNav: boolean;
  siteTitle: string;
};

const LandingpageLayout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}: Props) => (
  <>
    {/* <GlobalStyles> */}
    <Header
      landingPage
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <LandingpageContent>{children}</LandingpageContent>
    <Footer>
      <FooterInnerWrapper>
        <SiteInfo>&copy;{new Date().getFullYear()} Max Karlsson</SiteInfo>
      </FooterInnerWrapper>
    </Footer>
    {/* </GlobalStyles> */}
  </>
);

export default LandingpageLayout;
