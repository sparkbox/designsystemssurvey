import React from "react"

import Layout from "../components/layout"
import ContentBlock from "../components/content-block"

const NotFoundPage = () => (
  <Layout>
    <ContentBlock isFlexbox="true">
      <section className="cmp-404">
        <h1 className="cmp-404__title">404 Error</h1>
        <h3 className="cmp-404__description">We can't seem to find the page you're looking for.</h3>
        <p>Were you looking for this year's <a href="https://designsystemssurvey.seesparkbox.com/">Design System Survey results</a>?</p>
        <p>Or maybe <a href="https://designsystemssurvey.seesparkbox.com/2018">last year's results</a>?</p>
      </section>
    </ContentBlock>
  </Layout>
)

export default NotFoundPage
