import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <h1 class="font-chrome">Design systems</h1>
    <p class="font-accent">Survey</p>
    <h2 class="font-chrome font-chrome--small">Table of Contents</h2>
    <p class="font-label-heading">The Respondents</p>
    <h3 class="font-section-heading">The Respondents</h3>
    <h4 class="font-primary-content-heading">The 2019 Design Systems Survey received 148 responses from in-house teams who use a design system for their organizations.</h4>
    <h4 class="font-secondary-heading">Have a dedicated team to maintain the design system.</h4>
    <p class="font-diagram-heading util-margin-btm0">In-House Respondents Breakdown</p>
    <p class="font-diagram-copy">Respondents could select multiple from 19 options and fill out a response to “other”, 163 in-house and agency respondents</p>
    <p class="font-body-copy">This survey had 256 responses comprised of two respondent types:</p>

    <h2 className="font-label-heading">List Elements</h2>
    <p className="font-body-copy">Unordered List</p>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
    <p className="font-body-copy">Ordered List</p>
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
