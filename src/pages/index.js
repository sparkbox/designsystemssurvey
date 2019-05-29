import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="headline-1"><span data-text="design systems">Design systems</span></h1>
    <div className="cmp-intro">
      <p>The 2019 Design Systems Survey is intended to illuminate how design systems are created, used, and maintained. Design Systems have the ability to solve real-life problems, establishing consistency in design and code, promoting efficiency when creating products, communicating usage guidance, encouraging reuse instead of rework, increasing the accessibility and usability of digital properties, and so much more.</p>
      <p>For the <a href="https://designsystemssurvey.seesparkbox.com/">second year in a row</a>, <a href="https://seesparkbox.com/">Sparkbox</a>, a web design and development firm, has conducted this survey to learn more about both the challenges and benefits of building and using design systems. By analyzing the reflections of in-house teams who use a design system and agencies who’ve helped organizations build new or maintain existing design systems, we look to inform those who want to build or improve their own.</p>
    </div>
    <Link to="/page-2/">Go to typography and basic body copy styles on page 2</Link>
  </Layout>
)

export default IndexPage
