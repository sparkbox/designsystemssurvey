/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../../js/safe-focus"

// siteMetadata comes from gatsby-config.js
const Layout = ({ children }) => {
  return (
    <div class="obj-frame">
      <div className="obj-width-limiter">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
