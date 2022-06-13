import React, { Component } from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"
import Layout from '../components/2022/layout'
import Hero from "../components/2022/hero"
import Circle from "../components/2022/circle"
import Intro from "../sections/2022/intro"
import TableOfContents from "../sections/2022/table-of-contents"
import Section1 from "../sections/2022/section-1"
import Section2 from "../sections/2022/section-2"
import Section3 from "../sections/2022/section-3"
import Section4 from "../sections/2022/section-4"
import Section5 from "../sections/2022/section-5"
import Section6 from "../sections/2022/section-6"
import BenCTA from "../sections/2022/ben-cta"
import ContactForm from "../components/2022/contact-form"

import sendFormData from '../js/2022/form-submit'

class Page2022 extends Component {
  componentDidMount() {
    sendFormData()
  }

  render() {
    return (
      <>
        <SEO
          pageDescription="2022 Description"
          image="ogimage-2022.jpg"
          year="2022"
        />
  
        <Helmet>
          <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-sans-vf-regular-extra-condensed/font.woff2" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-serif-hairline/font.woff2" type="font/woff2" crossorigin="anonymous" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/2022.css"
            media="all and (-webkit-min-device-pixel-ratio: 0), (-moz-device-pixel-ratio: 0)"
          />
        </Helmet>
        <Layout>
          <Circle />
          <Hero />
          <Intro />
          <TableOfContents id="toc" />
          <Section1 />
          <Section2 />
          <Section3 />
          <BenCTA />
          <Section4 />
          <Section5 />
          <Section6 />
          <ContactForm />
        </Layout>
      </>
    )
  }
}

export default Page2022
