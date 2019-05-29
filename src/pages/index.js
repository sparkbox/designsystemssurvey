import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="headline-1"><span data-text="design systems">Design systems</span></h1>
    <Link to="/page-2/">Go to typography and basic body copy styles on page 2</Link>
  </Layout>
)

export default IndexPage
