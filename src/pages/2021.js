import React, { Component } from "react"
import Layout from '../components/2021/layout'
import Helmet from "react-helmet"
import SEO from '../components/SEO'
import FixedSides from '../components/2021/fixed-sides'
import Grid from '../components/2021/grid'
import GridCell from '../components/2021/grid-cell'
import SiteIntro from '../components/2021/intro'

import TableOfContents from '../components/2021/table-index'
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

          <SiteIntro>
            <Grid>
              <GridCell spanMD="6">
                <h2 className="cmp-type-h3">
                  Welcome to the fourth edition of Sparkbox’s Design Systems Survey
                </h2>
                <p className="cmp-type-body-large">
                  This year, we delve into design system priorities and challenges, including adoption, contribution, and debt. And we explore the evolution of design systems, including the experiences of organizations developing new (or additional) design systems.
                </p>
              </GridCell>
            </Grid>
          </SiteIntro>

          <Grid style={{margin: "10vh 0"}} className="util-margin-top-md util-margin-bottom-10vh">
            <GridCell start="3" span="2" startMD="7" startLG="9" spanLG="3">
              <p className="cmp-type-body-large"><a href="https://sparkbox.com">Sparkbox</a>, a web design and development studio, directed this survey. This year’s survey was shared for four weeks across social media platforms, in Slack channels, with visitors on <a href="https://sparkbox.com/foundry">The Foundry</a>, and in emails to web professionals.</p>
            </GridCell>
          </Grid>

          <TableOfContents />

          <section className="obj-section" id="section-1">
            <Section1 />
          </section>

          <section className="obj-section" id="section-2">
            <Section2 />
          </section>

          <section className="obj-section" id="section-3">
            <Section3 />
          </section>

          <section className="obj-section" id="section-4">
            <Section4 />
          </section>

          <section className="obj-section" id="section-5">
            <Section5 />
          </section>

          <section className="obj-section" id="section-6">
            <Section6 />
          </section>
        </div>
      </Layout>
    )
  }
}

export default Page2021
