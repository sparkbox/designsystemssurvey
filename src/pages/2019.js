import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
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
import { Helmet } from "react-helmet";

const Page2019 = () => (
  <Layout>
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/ogimage-2019.jpg" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hearsparkbox" />

      <meta name="author" content="Sparkbox" />
    </Helmet>
    <svg width="0" height="0" className="util-visually-hidden">
      <defs>
        <linearGradient id="pinkyellow" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#DF138C"/>
          <stop offset="100%" stop-color="#F3C448"/>
        </linearGradient>
      </defs>
    </svg>
    <article>
      <header>
        <Hero />
      </header>
      <a href="#table-of-contents" className="cmp-skip-link">Skip to table of contents</a>
      <div className="obj-section obj-intro">
        <ContentBlock>
          <IntroSection />
        </ContentBlock>
      </div>

      <div className="obj-section">
        <TableOfContents />
      </div>

      <section id="section-1" className="obj-section">
        <SectionHeader sectionNumber="1">
          The Respondents
        </ SectionHeader>
        <Section1 />
      </section>

      <section id="section-2" className="obj-section">
        <SectionHeader sectionNumber="2">
          Design System Contents and Functionality
        </ SectionHeader>
        <Section2 />
      </section>

      <section id="section-3" className="obj-section">
        <SectionHeader sectionNumber="3">
          Values and Challenges of Design Systems
        </ SectionHeader>
        <Section3 />
      </section>

      <section id="section-4" className="obj-section">
        <SectionHeader sectionNumber="4">
          Creating a Successful Design System
        </ SectionHeader>
        <Section4 />
      </section>

      <section id="section-5" className="obj-section">
        <SectionHeader sectionNumber="5">
          Learn More about Design Systems
        </ SectionHeader>
        <Section5 />
      </section>
    </article>

    <div className="obj-section">
      <Footer />
    </div>
  </Layout>
)

export default Page2019
