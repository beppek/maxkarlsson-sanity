import React from 'react'
import Header from './header/Header'

import '../styles/layout.css'
import styles from './layout.module.css'
import { GlobalStyles } from '../styles/Global'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            &copy; {new Date().getFullYear()} Max Karlsson, Built with{' '}
            <a href='https://www.sanity.io'>Sanity</a> &amp;
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </div>
        </div>
      </footer>
    </GlobalStyles>
  </>
)

export default Layout
