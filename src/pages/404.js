import React, { Component } from "react"
import Layout from '../components/2021/layout'
import SEO from '../components/SEO'

class NotFoundPage extends Component {
  render () {
    return (
      <Layout>
        <SEO
          pageDescription="Page Not Found"
          image="ogimage-2021.png"
          year="2021"
        />

        <div className="obj-lines util-height-full">
          <div class="cmp-error">
            <h1 className="util-visually-hidden">404 Error. Page not found.</h1>
            <h2 class="cmp-error__title">Page Not Found</h2>
       
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

