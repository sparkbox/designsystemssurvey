import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <h1 class="chrome"><span data-text="design systems">Design systems</span></h1>
    <p class="accent-font">Survey</p>
    <h2 class="chrome--small"><span data-text="Table of Contents">Table of Contents</span></h2>
    <p class="label-heading">The Respondents</p>
    <h3 class="section-heading">The Respondents</h3>
    <h4 class="primary-content-heading">The 2019 Design Systems Survey received 148 responses from in-house teams who use a design system for their organizations.</h4>
    <h4 class="secondary-heading"><span data-text="Have a dedicated team to maintain the design system.">Have a dedicated team to maintain the design system.</span></h4>
    <p class="diagram-heading util-margin-btm0">In-House Respondents Breakdown</p>
    <p class="diagram-copy util-margin-top0">Respondents could select multiple from 19 options and fill out a response to “other”, 163 in-house and agency respondents</p>
    <p class="body-copy">This survey had 256 responses comprised of two respondent types:</p>

    <h2 className="label-heading">List Elements</h2>
    <p className="body-copy">Unordered List</p>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
    <p className="body-copy">Ordered List</p>
    <ol>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ol>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
