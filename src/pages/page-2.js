import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 test</p>

    <h1 class="headline-1"><span data-text="design systems">Design systems</span></h1>
    <p class="accent-font"><span data-text="survey">Survey</span></p>
    <h2 class="headline-1--small"><span data-text="Table of Contents">Table of Contents</span></h2>
    <p class="headline-4">The Respondents</p>
    <h3 class="headline-2">The Respondents</h3>
    <h4 class="headline-3"><span data-text="The 2019 Design Systems Survey received 148 responses from in-house teams who use a design system for their organizations.">The 2019 Design Systems Survey received 148 responses from in-house teams who use a design system for their organizations.</span></h4>
    <p class="diagram-headline util-margin-btm0">In-House Respondents Breakdown</p>
    <p class="diagram-copy util-margin-top0">Respondents could select multiple from 19 options and fill out a response to “other”, 163 in-house and agency respondents</p>
    <p class="body-copy">This survey had 256 responses comprised of two respondent types:</p>

    <h2 className="headline-4">List Elements</h2>
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
