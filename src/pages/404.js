import React, { Component } from "react"
import Layout from '../components/2022/layout'
import SEO from '../components/SEO'
import Helmet from "react-helmet"
import Circle from '../components/2022/circle'
import Grid from "../components/2022/grid"
import GridCell from "../components/2022/grid-cell"

class NotFoundPage extends Component {
  render () {
    return (
      <Layout>
        <SEO
          pageDescription="Page Not Found"
          image="ogimage-2022.png"
          year="2022"
        />
        
        <Helmet>
          <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-sans-vf-regular-extra-condensed/font.woff2" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-serif-hairline/font.woff2" type="font/woff2" crossorigin="anonymous" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/2022.css"
            media="all and (-webkit-min-device-pixel-ratio: 0), (-moz-device-pixel-ratio: 0)"
          />
        </Helmet>

        
        <Circle />
        <div className="cmp-hero">
          <Grid>
            <GridCell spanSM={4} spanMD={6} startSM={2} spanLG={6} startLG={4}>
              <h1 className="util-visually-hidden">404 Error. Page not found.</h1>
              <h2 className="cmp-type-heading-1">Page Not Found</h2>
            </GridCell>
            
            <GridCell spanSM={4} spanMD={6} startSM={2} spanLG={6} startLG={4}>
              <h3 className="cmp-type-heading-3">We can't seem to find the page you're looking&nbsp;for.</h3>
              <p className="util-font-p-big cmp-type-body-large util-margin-bottom-md">Were you looking for this year's Design Systems Survey results?</p>
              <a className="cmp-button" href="/">Take Me to the Latest Results</a>
            </GridCell>
          </Grid>
          <div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default NotFoundPage

