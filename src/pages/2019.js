import React from 'react'

import Layout2019 from '../components/2019/layout'
import SEO from '../components/SEO'
import Hero from '../components/2019/hero'
import IntroSection from '../sections/2019/intro'
import Section1 from '../sections/2019/section-1'
import Section2 from '../sections/2019/section-2'
import Section3 from '../sections/2019/section-3'
import Section4 from '../sections/2019/section-4'
import Section5 from '../sections/2019/section-5'
import Footer from '../components/2019/footer'
import TableOfContents from '../components/2019/table-of-contents'
import ContentBlock from '../components/2019/content-block'
import SectionHeader from '../components/2019/section-header'

const Page2019 = () => (
  <Layout2019>
    <SEO
      pageDescription="How are design systems for websites and apps changing the way the industry works? Sparkbox conducted a survey and is excited to share findings on the benefits and challenges of this impactful, systemic work."
      image="ogimage-2019.jpg"
      fontCSS="https:cloud.typography.com/655912/7241412/css/fonts.css"
      year="2019"
    />
    <svg width="0" height="0" className="util-visually-hidden">
      <defs>
        <linearGradient id="pinkyellow" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DF138C" />
          <stop offset="100%" stopColor="#F3C448" />
        </linearGradient>
      </defs>
    </svg>
    <article>
      <header>
        <Hero />
      </header>
      <a href="#table-of-contents" className="cmp-skip-link">
        Skip to table of contents
      </a>
      <div className="obj-section obj-intro">
        <ContentBlock>
          <IntroSection />
        </ContentBlock>
      </div>

      <div className="obj-section">
        <TableOfContents />
      </div>

      <section id="section-1" className="obj-section">
        <SectionHeader sectionNumber="1">The Respondents</SectionHeader>
        <Section1 />
      </section>

      <section id="section-2" className="obj-section">
        <SectionHeader sectionNumber="2">
          Design System Contents and Functionality
        </SectionHeader>
        <Section2 />
      </section>

      <section id="section-3" className="obj-section">
        <SectionHeader sectionNumber="3">
          Values and Challenges of Design Systems
        </SectionHeader>
        <Section3 />
      </section>

      <section id="section-4" className="obj-section">
        <SectionHeader sectionNumber="4">
          Creating a Successful Design System
        </SectionHeader>
        <Section4 />
      </section>

      <section id="section-5" className="obj-section">
        <SectionHeader sectionNumber="5">
          Learn More about Design Systems
        </SectionHeader>
        <Section5 />
      </section>
    </article>

    <div className="obj-section">
      <Footer />
    </div>
  </Layout2019>
)

export default Page2019
