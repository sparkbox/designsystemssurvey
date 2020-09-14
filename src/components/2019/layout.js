/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"


import "../../js/safe-focus"
import "../../js/2019/chart-animation"

// siteMetadata comes from gatsby-config.js
const Layout2019 = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

Layout2019.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2019
