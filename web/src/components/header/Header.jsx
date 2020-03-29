import { Link } from 'gatsby'
import React from 'react'
import Icon from '../icon'

import Logo from '../../../static/logo.svg'

import {Root, Wrapper, Branding, ToggleNavButton, Nav} from './HeaderStyles'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <Root>
    <Wrapper>
      <Branding>
        <Link to='/'><Logo /> {siteTitle}</Link>
      </Branding>

      <ToggleNavButton onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </ToggleNavButton>

      <Nav showNav={showNav}>
        <ul>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          <li>
            <Link to='/courses/'>Courses</Link>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  </Root>
)

export default Header
