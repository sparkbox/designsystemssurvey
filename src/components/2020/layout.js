/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// import Header from "./header"
// import "../../js/safe-focus"
// import "../../js/2020/smooth-scroll"
// import "../../js/2020/intersect"

// siteMetadata comes from gatsby-config.js
const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
