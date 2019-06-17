import React from "react"

import Layout from "../components/layout"
import ContentBlock from "../components/content-block"

const NotFoundPage = () => (
  <Layout>
    <ContentBlock>
      <div className="obj-layout-flexbox-center-vrt">
        <section className="cmp-404">
          <h1 className="cmp-404__title">404 Error</h1>
          <h3 className="cmp-404__description">We can't seem to find the page you're looking for.</h3>
          <p>Were you looking for this year's <a href="#">Design System Survey results</a>?</p>
          <p>Or maybe <a href="#">last year's results</a>?</p>
        </section>
      </div>
    </ContentBlock>
  </Layout>
)

export default NotFoundPage
