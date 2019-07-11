import React from "react"

import Layout from "../components/layout"
import IntroSection from "../sections/intro"
import Section1 from "../sections/section-1"
import Section2 from "../sections/section-2"
import Section3 from "../sections/section-3"
import Section4 from "../sections/section-4"
import Section5 from "../sections/section-5"
import Footer from "../components/footer"
import TableOfContents from "../components/table-of-contents"
import ContentBlock from "../components/content-block"
import SectionHeader from "../components/section-header"

const Page2019 = () => (
  <Layout>
    <svg width="0" height="0" className="util-visually-hidden">
      <defs>
        <linearGradient id="pinkyellow" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#DF138C"/>
          <stop offset="100%" stop-color="#F3C448"/>
        </linearGradient>
      </defs>
    </svg>
    <ContentBlock>
      <a href="#table-of-contents" className="cmp-skip-link">Skip to table of contents</a>
      <IntroSection />
    </ContentBlock>

    <div>
      <TableOfContents />
    </div>

    <section id="section-1">
        <SectionHeader sectionNumber="1">
          The Respondents
        </ SectionHeader>
      <Section1 />
    </section>

    <section id="section-2">
        <SectionHeader sectionNumber="2">
          Design&nbsp;System Contents and Functionality
        </ SectionHeader>
      <Section2 />
    </section>

    <section id="section-3">
        <SectionHeader sectionNumber="3">
          Values and Challenges of&nbsp;Design&nbsp;Systems
        </ SectionHeader>
      <Section3 />
    </section>

    <section id="section-4">
        <SectionHeader sectionNumber="4">
          Creating a Successful Design&nbsp;System
        </ SectionHeader>
      <Section4 />
    </section>

    <section id="section-5">
        <SectionHeader sectionNumber="5">
          Learn More about Design&nbsp;Systems
        </ SectionHeader>
      <Section5 />
    </section>

    <Footer />
  </Layout>
)

export default Page2019
