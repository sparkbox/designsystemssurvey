import React from "react"
import Page2019 from './2019'

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import IntroSection from "../sections/intro"
import Section1 from "../sections/section-1"
import Section2 from "../sections/section-2"
import Section3 from "../sections/section-3"
import Section4 from "../sections/section-4"
import Section5 from "../sections/section-5"
import Footer from "../components/footer"
import TableOfContents from "../components/table-of-contents"
import ContentBlock from "../components/content-block"
import SectionHeading from "../components/section-heading"

const IndexPage = () => (
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
      <header>
        <SectionHeading sectionNumber="1">
          The Respondents
        </ SectionHeading>
      </header>

      <Section1 />
    </section>

    <section id="section-2">
      <header>
        <SectionHeading sectionNumber="2">
          Design&nbsp;System Contents and Functionality
        </ SectionHeading>
      </header>

      <Section2 />
    </section>

    <section id="section-3">
      <header>
        <SectionHeading sectionNumber="3">
          Values and Challenges of&nbsp;Design&nbsp;Systems
        </ SectionHeading>
      </header>

      <Section3 />
    </section>

    <section id="section-4">
      <header>
        <SectionHeading sectionNumber="4">
          Creating a Successful Design&nbsp;System
        </ SectionHeading>
      </header>

      <Section4 />
    </section>

    <section id="section-5">
      <header>
        <SectionHeading sectionNumber="5">
          Learn More about Design&nbsp;Systems
        </ SectionHeading>
      </header>

      <Section5 />
    </section>

    <Footer />
  </Layout>
)

const Index = () => (
  <Page2019 />
)

export default Index
