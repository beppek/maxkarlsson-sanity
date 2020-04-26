import React from 'react';
import { Link } from 'gatsby';
import Icon from '../icon';

import Logo from '../../../static/logo3.svg';

import { Root, Wrapper, Branding, ToggleNavButton, Nav } from './header-styles';
import { useColors } from '../../hooks/use-global-colors';

type Props = {
  onHideNav?: any;
  onShowNav?: any;
  showNav?: boolean;
  siteTitle?: string;
  landingPage?: boolean;
};

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  landingPage,
}: Props) => {
  const { colors } = useColors();
  return (
    <Root>
      <Wrapper
        backgroundColor={!landingPage && colors.header}
        foregroundColor={!landingPage && colors.foreground}
        accentColor={!landingPage && colors.header}
        showNav={showNav}
      >
        <Branding landingPage={landingPage}>
          <Link to="/">
            <Logo /> {siteTitle}
          </Link>
        </Branding>

        <ToggleNavButton onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </ToggleNavButton>

        <Nav landingPage={landingPage} showNav={showNav}>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li>
              <Link to="/learn">Learn</Link>
            </li> */}
            {/* <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li> */}
          </ul>
        </Nav>
      </Wrapper>
    </Root>
  );
};

export default Header;
