import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GenericLayout from '../components/layout/GenericLayout'
import LandingpageLayout from '../components/layout/LandingpageLayout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

function LayoutContainer ({landingPage, ...props}) {
  const [showNav, setShowNav] = useState(false)
  const data = useStaticQuery(query)
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    )
  }
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }

  return landingPage 
    ? (
      <LandingpageLayout
        {...props}
        showNav={showNav}
        siteTitle={data.site.title}
        onHideNav={handleHideNav}
        onShowNav={handleShowNav}
      />
    ) : (
      <GenericLayout
        {...props}
        showNav={showNav}
        siteTitle={data.site.title}
        onHideNav={handleHideNav}
        onShowNav={handleShowNav}
      />
    )
}

export default LayoutContainer
