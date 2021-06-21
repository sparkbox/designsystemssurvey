import React, { Component } from "react"
import Layout from '../components/2021/layout'
import Helmet from "react-helmet"
import SEO from '../components/SEO'

import FixedSides from '../components/2021/fixed-sides'

import Section1 from '../sections/2021/section-1'
import Section2 from '../sections/2021/section-2'
import Section3 from '../sections/2021/section-3'
import Section4 from '../sections/2021/section-4'
import Section5 from '../sections/2021/section-5'
import Section6 from '../sections/2021/section-6'

class Page2021 extends Component {
  render () {
    return (
      <Layout>
        <SEO
          pageDescription="These survey results explore the challenges of a design system, from planning and managing changes to organizational adoption. They examine what makes a mature design system that positively impacts the team."
          image="ogimage-2021.png"
          year="2021"
        />

        <Helmet>
          <link rel="preload" as="font" href="/fonts/2021/Inconsolata.woff2" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" as="font" href="/fonts/2021/SoleSans.woff2" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" as="font" href="/fonts/2021/SoleSansItalic.woff2" type="font/woff2" crossorigin="anonymous" />
        </Helmet>

        <div className="obj-lines obj-max-width">
          
          <FixedSides />
 
          <section className="obj-section">
            <Section1 />
          </section>

          <section className="obj-section">
            <Section2 />
          </section>

          <section className="obj-section">
            <Section3 />
          </section>

          <section className="obj-section">
            <Section4 />
          </section>

          <section className="obj-section">
            <Section5 />
          </section>

          <section className="obj-section">
            <Section6 />
          </section>
        </div>
      </Layout>
    )
  }
} 

export default Page2021
