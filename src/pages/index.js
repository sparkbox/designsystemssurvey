import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="headline-1"><span data-text="design systems">Design systems</span></h1>
    <p class="accent-font"><span data-text="survey">Survey</span></p>
    <h2 class="headline-1--small"><span data-text="Table of Contents">Table of Contents</span></h2>
    <p class="headline-4" style={{background: `black`,}}>The Respondents</p>
    <h3 class="headline-2">The Respondents</h3>
    <h4 class="headline-3"><span data-text="The 2019 Design Systems Survey received 148 responses from in-house teams who use a design system for their organizations.">The 2019 Design Systems Survey received 148 responses from in-house teams who use a design system for their organizations.</span></h4>
    <p class="body-copy" style={{background: `black`,}}>This survey had 256 responses comprised of two respondent types:</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
