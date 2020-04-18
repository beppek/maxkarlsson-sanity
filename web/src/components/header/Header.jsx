import { Link } from 'gatsby'
import React from 'react'
import Icon from '../icon'

import Logo from '../../../static/logo.svg'

import {Root, Wrapper, Branding, ToggleNavButton, Nav} from './header.styles'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, landingPage }) => {
  console.log('landingPage', landingPage)
  return (
  <Root>
    <Wrapper borderBottom={!landingPage}>
      <Branding landingPage={landingPage}>
        <Link to='/'><Logo /> {siteTitle}</Link>
      </Branding>

      <ToggleNavButton onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </ToggleNavButton>

      <Nav landingPage={landingPage} showNav={showNav}>
        <ul>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/learn'>Learn</Link>
          </li>
          {/* <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li> */}
        </ul>
      </Nav>
    </Wrapper>
  </Root>
)}

export default Header
