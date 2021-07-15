import React, { Component } from "react"
import Layout from '../components/2021/layout'
import SEO from '../components/SEO'
import Helmet from "react-helmet"

class NotFoundPage extends Component {
  render () {
    let modernCSS = 'all and (-webkit-min-device-pixel-ratio: 0), (-moz-device-pixel-ratio: 0)';
    let ieCSS = 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)';

    return (
      <Layout>
        <SEO
          pageDescription="Page Not Found"
          image="ogimage-2021.png"
          year="2021"
        />
        
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;700&display=swap" rel="stylesheet" media={ieCSS} />
        <link rel="preload" as="font" href="/fonts/2021/Inconsolata.woff2" type="font/woff2" crossorigin="anonymous" media={modernCSS} />
        <link rel="preload" as="font" href="/fonts/2021/SoleSans.woff2" type="font/woff2" crossorigin="anonymous" media={modernCSS} />
        <link rel="stylesheet" type="text/css" href="/css/2021.css" media={modernCSS} />
        <link rel="stylesheet" type="text/css" href="/css/2021-ie.css" media={ieCSS} />
      </Helmet>

        <div className="obj-lines util-height-full">
          <div className="cmp-error">
            <h1 className="util-visually-hidden">404 Error. Page not found.</h1>
            <h2 className="cmp-error__title">Page Not Found</h2>
       
            <div className="util-pad-horizontal-lg util-pad-vertical-lg util-pad-vertical-h2@md util-pad-vertical-h3@lg">
              <h2 className="cmp-type-h3">We can't seem to find the page you're looking&nbsp;for.</h2>
              <p className="util-font-p-big cmp-type-body-large util-margin-bottom-md">Were you looking for this year's Design Systems Survey results?</p>
              <a className="cmp-type-body-large cmp-error__link" href="/">Take Me to the Latest Results</a>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default NotFoundPage

