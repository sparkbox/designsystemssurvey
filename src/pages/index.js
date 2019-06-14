import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import IntroSection from "../sections/intro"
import TableOfContents from "../components/table-of-contents"
import Section1 from "../sections/section-1"
import Section2 from "../sections/section-2"
import Section3 from "../sections/section-3"
import Section4 from "../sections/section-4"
import Section5 from "../sections/section-5"
import ContentBlock from "../components/content-block"


const IndexPage = () => (
  <Layout>
    <ContentBlock>
      <a href="#table-of-contents" className="cmp-skip-link">Skip to table of contents</a>
      <IntroSection />
    </ContentBlock>

    <div>
      <TableOfContents />
    </div>

    <section id="section-1">
      <header>
        <h2>The Respondents</h2>
      </header>

      <Section1 />
    </section>

    <section id="section-2">
      <header>
        <h2>Design System Contents and Functionality</h2>
      </header>

      <Section2 />
    </section>

    <section id="section-3">
      <header>
        <h2>Values and Challenges of Design Systems</h2>
      </header>

      <Section3 />
    </section>

    <section id="section-4">
      <header>
        <h2>Creating a Successful Design System</h2>
      </header>

      <Section4 />
    </section>

    <section id="section-5">
      <header>
        <h2>Learn More about Design Systems</h2>
      </header>

      <Section5 />
    </section>
  </Layout>
)

export default IndexPage
