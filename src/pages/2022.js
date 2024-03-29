import React, { Component } from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"
import Layout from '../components/2022/layout'
import FixedSides from "../components/2022/fixed-sides"
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
import ContactFormBen from "../components/2022/contact-form-ben"
import ContactFormNewsletter from "../components/2022/contact-form-newsletter"
import Footer from "../components/2022/footer"

import sendFormData from "../js/2022/form-submit"
import sectionObserver from "../js/2022/section-observer"
import animationObserver from "../js/2022/animation-observer"
import circleOverlay from "../js/2022/circle"

class Page2022 extends Component {
  componentDidMount() {
    circleOverlay()
    sectionObserver()
    animationObserver()
    sendFormData()
  }

  render() {
    return (
      <>
        <SEO
          pageDescription="Why are design systems useful? Designers and developers from more than 20 industries tell us about their design systems and their uses."
          image="ogimage-2022.png"
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
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQ53HCR" height="0" width="0"
              style="display:none;visibility:hidden"></iframe>
            `,
          }} />
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <a className="cmp-skip-link" href="#toc">Skip to Menu</a>
          <a className="cmp-skip-link" href="#section-1">Skip to Content</a>

          <Circle />
          <div data-observer="top">
            <Hero />
            <Intro />
          </div>
          <TableOfContents id="toc" />
          <FixedSides />
          <Section1 />
          <Section2 />
          <Section3 />
          <ContactFormBen />
          <Section4 />
          <Section5 />
          <Section6 />
          <ContactFormNewsletter />
          <Footer />
        </Layout>
      </>
    )
  }
}

export default Page2022
