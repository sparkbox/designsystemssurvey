import React from "react"

import SectionHeader from '../../components/2021/section-header'
import Grid from '../../components/2021/grid'
import GridCell from '../../components/2021/grid-cell'
import BarChart from '../../components/2021/bar-chart'
import Figure from "../../components/2021/figure"
import SmallCallout from "../../components/2021/small-callout"
import Quote from "../../components/2021/quote"
import CallToAction from "../../components/2021/call-to-action"

const Section5 = () => (
  <Grid className="util-margin-bottom-20vh">
    <GridCell spanMD="8" spanLG="12">
      <SectionHeader title="Evolution" number="5" total="6" />
    </GridCell>

    <GridCell span="6" className="util-margin-bottom-1xl util-margin-bottom-2xl@md">
      <p className="cmp-type-body-large">Since the 2020 Design Systems Survey, we’ve heard from peers and clients that many teams have started over with a new design system. As a result, this year we added questions to better understand how common this may be and to understand why teams are choosing to build additional or new design systems.</p>
    </GridCell>

    <GridCell startLG="3" className="util-margin-bottom-1xl util-margin-bottom-2xl@md">
      <Figure count="5.1" caption="136">
        <BarChart
          sizeFormat="small"
          headingLevel="h3"
          title="Some teams are thinking about creating new systems"
          dataPoints={[
            ['No', [61]],
            ['Yes, we have considered creating a new design system', [9]],
            ['Yes, we have taken steps towards creating a new design system', [26]],
            ['I am not sure', [4]],
          ]}>
            <p>“Has your organization thought about or already started over on a <em>new</em> design system?”</p>
        </BarChart>
      </Figure>
    </GridCell>

    <GridCell align="end" span="3" spanMD="4" startMD="7" spanLG="3" startLG="9" className="util-margin-bottom-1xl util-margin-bottom-2xl@md">
      <SmallCallout>
        <p>35% of in-house teams have thought about or taken steps to create a new design system. And, separately, 58% of agency respondents reported that they had witnessed a client consider or take steps toward a new design system.</p>
      </SmallCallout>
    </GridCell>

    <GridCell startMD="2" spanMD="3" startLG="3" spanLG="4" className="util-margin-bottom-1xl">
      <h3>Why are some teams considering/starting over?</h3>
      Among in-house teams who have begun or considered beginning a new system, the top reason for doing so (12 of 25 responses) was difficulties with adoption—with a strong mention of cross-team silos.
    </GridCell>

    <GridCell startMD="6" startLG="8" spanLG="4" className="util-margin-bottom-1xl util-margin-top-1xl@md">
      <Quote
        decoStyle="alt"
        sizeFormat="small"
        cite="Manager, slightly successful design system">
        <p><em><strong>Different areas in our org are going in their own directions and believe they need their own design systems.</strong></em> One area in particular is moving to a new backend and was given the mandate from business to create an entirely new visual language. They specifically do not wish to use the existing DS team or system to house and integrate their libraries into <em><strong>(politics, really)</strong></em>.</p>
      </Quote>

      <Quote
        decoStyle="alt"
        sizeFormat="small"
        cite="Manager, very successful design system">
        <p><em><strong>Several [lines of business]</strong></em> have spun up new design systems.</p>
      </Quote>
    </GridCell>

    <GridCell start="1" spanLG="4" className="util-margin-bottom-1xl">
      <p>Other common responses included overcoming technical debt or technical evolution (8 of 25), evolving designs or brands (4 of 25), and issues caused by changing contribution models or system inflexibility (4 of 25) as influencing factors.</p>
    </GridCell>

    <GridCell startMD="2" spanMD="3" startLG="4" className="util-margin-bottom-1xl@md">
      <Quote
        sizeFormat="small"
        cite="Manager, slightly successful design system">
        <p>To increase adoption as we <em><strong>move towards a common tech stack.</strong></em></p>
      </Quote>
    </GridCell>

    <GridCell startMD="6" startLG="8" spanLG="4" className="util-margin-bottom-1xl util-margin-bottom-2xl">
      <Quote
        sizeFormat="small"
        cite="Owner, successful design system">
        <p>We've created <em><strong>a lot of technical debt</strong></em> on our way and learned from our mistakes. We're building a new and well documented design system from our existing components... and <em><strong>moving from a very restricted design system to a more flexible system.</strong></em></p>
      </Quote>
    </GridCell>

    <GridCell startMD="2" startLG="3" className="util-margin-bottom-1xl">
      <Figure count="5.2" caption="136">
        <BarChart
          sizeFormat="small"
          headingLevel="h3"
          title="Many teams already have more than one system"
          dataPoints={[
            ['No, we only have one design system', [57]],
            ['Yes, we have more than one design system', [39]],
            ['I am not sure', [4]],
          ]}>
            <p>“Does your organization have <em>more than one</em> design system currently being used?”</p>
        </BarChart>
      </Figure>
    </GridCell>

    <GridCell startMD="3" startLG="5" spanLG="4" className="util-margin-bottom-1xl">
      <h3>Why do some organizations have multiple systems?</h3>
      Of in-house respondents who reported their organization having more than one design system, the top theme mentioned was that they exist to accommodate different audiences (20 of 29 responses) with many referencing cross-team silos as a challenge.
    </GridCell>

    <GridCell startMD="2" spanMD="3" startLG="3" spanLG="4" className="util-margin-bottom-1xl@md">
      <Quote
        sizeFormat="small"
        cite="Manager, successful design system">
        <p>There are different divisions of the company that <em><strong>serve different customers and personas</strong></em>. These teams spun up their own design system.</p>
      </Quote>
    </GridCell>

    <GridCell startMD="6" startLG="8" className="util-margin-top-1xl@md">
      <Quote
        sizeFormat="small"
        cite="Manager, successful design system">
        <p>Our company is large and has multiple group companies that operate almost like their own entities. <em><strong>It's typical for group companies to have one or more systems associated with notably different products</strong></em>.</p>
      </Quote>
    </GridCell>

    <GridCell startMD="6" startLG="9" className="util-margin-bottom-2xl util-margin-bottom-none@lg">
      <Quote
        sizeFormat="small"
        cite="Individual contributor, slightly successful design system">
        <p>Some brands started mini or micro DSs <em><strong>to bypass central DS police and also have more control</strong></em> over smaller changes or style changes.</p>
      </Quote>
    </GridCell>

    <GridCell start="1" spanMD="6" className="util-margin-bottom-1xl">
      <CallToAction mark="right">
        <svg style={{maxWidth: 4 + 'rem'}} viewBox="0 0 64 64">
          <path style={{fill: 'var(--color-neutral-1)'}} d="M62 1c.6 0 1 .4 1 1v26.5L35.5 1H62m0-1H33.1L64 30.9V2c0-1.1-.9-2-2-2zM63 35.5V62c0 .6-.4 1-1 1H35.5L63 35.5m1-2.4L33.1 64H62c1.1 0 2-.9 2-2V33.1zM1 35.5L28.5 63H2c-.6 0-1-.4-1-1V35.5m-1-2.4V62c0 1.1.9 2 2 2h28.9L0 33.1zM28.5 1L1 28.5V2c0-.6.4-1 1-1h26.5m2.4-1H2C.9 0 0 .9 0 2v28.9L30.9 0zM26 24.9h12c.6 0 1.1.5 1.1 1.1v12c0 .6-.5 1.1-1.1 1.1H26c-.6 0-1.1-.5-1.1-1.1V26c0-.6.5-1.1 1.1-1.1z M30 14.8H14.9V30zM14.9 34v15.2H30zM49.1 30V14.8H34zM34 49.2h15.1V34z"/>
        </svg>

        <h3>Design systems are intended to cross complex boundaries, but realizing the full value of your investment is tricky work.</h3>
        <p>Design systems are intended to cross complex boundaries, but realizing the full value of your investment is tricky work.</p>
        <p>Take the Maturity Model Assessment to get feedback on where you are now, and suggestions that will help you move forward to benefit your whole organization.</p>
        <a href="https://example.com" className="cmp-button cmp-button--inverse">Take the Survey</a>
      </CallToAction>
    </GridCell>
  </Grid>
)

export default Section5
