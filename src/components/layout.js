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

import Header from "./header"
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
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/655912/7241412/css/fonts.css" />
          <link href="https://fonts.googleapis.com/css?family=Yellowtail&display=swap" rel="stylesheet" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1400,
          }}
        >
          <main>{children}</main>
          <footer style={{ color: "white"}}>
            <p>© {new Date().getFullYear()} Sparkbox.</p>
            <p>All rights reserved.</p>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
