import React, { Component } from "react"
import Layout from '../components/2021/layout'
import Helmet from "react-helmet"
import SEO from '../components/SEO'
import FixedSides from '../components/2021/fixed-sides'
import Grid from '../components/2021/grid'
import GridCell from '../components/2021/grid-cell'
import SiteIntro from '../components/2021/intro'
import ContactForm from '../components/2021/contact-form'
import TableOfContents from '../components/2021/table-index'
import CallToAction from '../components/2021/call-to-action'

import Section1 from '../sections/2021/section-1'
import Section2 from '../sections/2021/section-2'
import Section3 from '../sections/2021/section-3'
import Section4 from '../sections/2021/section-4'
import Section5 from '../sections/2021/section-5'
import Section6 from '../sections/2021/section-6'
import Footer from '../components/2021/footer'

import sendFormData from '../js/2021/form-submit'
import sectionObserver from '../js/2021/section-observer'

class Page2021 extends Component {
  componentDidMount() {
    sectionObserver()
    sendFormData()
  }

  render () {
    let modernCSS = 'all and (-webkit-min-device-pixel-ratio: 0), (-moz-device-pixel-ratio: 0)';
    let ieCSS = 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)';

    return (
      <Layout>
        <SEO
          pageDescription="This year, we delve into design system priorities and challenges, including adoption, contribution, and debt."
          image="ogimage-2021.jpg"
          year="2021"
        />

        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;700&display=swap" rel="stylesheet" media={ieCSS} />
          <link rel="preload" as="font" href="/fonts/2021/Inconsolata.woff2" type="font/woff2" crossorigin="anonymous" media={modernCSS} />
          <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-sans-vf-regular-extra-condensed/font.woff2" type="font/woff2" crossorigin="anonymous" media={modernCSS} />
          <link rel="stylesheet" type="text/css" href="/css/2021.css" media={modernCSS} />
          <link rel="stylesheet" type="text/css" href="/css/2021-ie.css" media={ieCSS} />
        </Helmet>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQ53HCR" height="0" width="0"
              style="display:none;visibility:hidden"></iframe>
            `,
        }} />
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <div className="obj-lines obj-max-width">

          <FixedSides />

          <a className="cmp-skip-link" href="#table-of-contents">Skip to Menu</a>
          <a className="cmp-skip-link" href="#section-1">Skip to Content</a>

          <div className="js-section" data-name="Introduction">
            <SiteIntro>
              <Grid>
                <GridCell spanMD="5" spanLG="6">
                  <h2 className="cmp-type-body-large"><a href="/">Check out the results from the latest Design Systems Survey</a></h2>
                  <h2 className="cmp-type-h3">
                    Welcome to the fourth edition of Sparkbox’s Design Systems Survey
                  </h2>
                  <p className="cmp-type-body-large">
                    This year, we delve into design system priorities and challenges, including adoption, contribution, and debt. And we explore the evolution of design systems, including the experiences of organizations developing new (or additional) design systems.
                  </p>
                </GridCell>
              </Grid>
            </SiteIntro>
          </div>

          <div className="js-section" data-name="Table of Contents">
            <Grid style={{margin: "10vh 0"}} className="util-margin-top-md util-margin-bottom-10vh">
              <GridCell start="3" span="2" startMD="7" startLG="9" spanLG="3">
                <p className="cmp-type-body-large"><a href="https://sparkbox.com">Sparkbox</a>, a web design and development studio, directed this survey. This year’s survey was shared for four weeks across social media platforms, in Slack channels, with visitors on <a href="https://sparkbox.com/foundry">The Foundry</a>, and in emails to web professionals.</p>
              </GridCell>
            </Grid>

            <TableOfContents />
          </div>

          <section className="obj-section js-section" id="section-1" data-name="<em>01</em> The Respondents">
            <Section1 />
          </section>

          <section className="obj-section js-section" id="section-2" data-name="<em>02</em> Characteristics &amp; Team">
            <Section2 />
          </section>

          <section className="obj-section js-section" id="section-3" data-name="<em>03</em> Priorities &amp; Challenges">
            <Section3 />
          </section>

          <section className="obj-section js-section" id="section-4" data-name="<em>04</em> Metrics">
            <Section4 />
          </section>

          <section className="obj-section js-section" id="section-5" data-name="<em>05</em> Evolution">
            <Section5 />
          </section>

          <section className="obj-section js-section" id="section-6" data-name="<em>06</em> Conclusion">
            <Section6 />
          </section>

          <CallToAction mark="left">
            <Grid>
              <GridCell spanLG="5">
                <svg style={{maxWidth: 4 + 'rem'}} viewBox="0 0 64 64">
                  <path style={{stroke: 'var(--color-neutral-1)', fill: 'var(--color-neutral-3)'}} d="M.5 9.643h63v38.619H.5V9.642z" stroke="#FFFEFA"/>
                  <path style={{fill: 'var(--color-neutral-1)'}} d="M0 9.143h64L32 26.666 0 9.143z" fill="#FFFEFA"/>
                </svg>

                <h2 className="cmp-type-section">Would you join us and help us uncover more answers?</h2>
                <p className="cmp-type-body-large">Sparkbox conducts this survey annually to give the design system community an opportunity to learn from one another. </p>
              </GridCell>
              <GridCell startMD="6" spanMD="3" startLG="7" spanLG="6">
                <ContactForm />
              </GridCell>
            </Grid>
          </CallToAction>

          <div className="obj-section util-margin-top-1xl" id="footer">
            <Footer />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page2021
