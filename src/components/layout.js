/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

// import Header from "./header"
import "../js/chart-animation"
import "../js/safe-focus"
import "../scss/base.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/655912/7241412/css/fonts.css" />
          <link href="https://fonts.googleapis.com/css?family=Yellowtail&display=swap" rel="stylesheet" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
