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

// siteMetadata comes from gatsby-config.js
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            name
            author
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="name" content={data.site.siteMetadata.name} />
          <meta name="author" content={data.site.siteMetadata.author} />
          <meta name="description" content={data.site.siteMetadata.description} />

          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://designsystemssurvey.seesparkbox.com/images/ogimage-2019.jpg" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@hearsparkbox" />


          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/655912/7241412/css/fonts.css" />

          {/* This will change based on the current year */}
          <link rel="canonical" href="https://designsystemssurvey.seesparkbox.com/2019" />
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
