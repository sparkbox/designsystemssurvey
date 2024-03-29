import React, { Component } from "react"
import Layout from '../components/2021/layout'
import Helmet from "react-helmet"
import SEO from '../components/SEO'

import FixedSides from '../components/2021/fixed-sides'
import SectionHeader from '../components/2021/section-header'
import Grid from '../components/2021/grid'
import GridCell from '../components/2021/grid-cell'
import PieChart from '../components/2021/pie-chart'
import BarChart from '../components/2021/bar-chart'
import StackedChart from '../components/2021/stacked-chart'
import Figure from "../components/2021/figure"
import SlimHeading from "../components/2021/slim-heading"
import SmallCallout from "../components/2021/small-callout"
import Quote from "../components/2021/quote"
import CallToAction from "../components/2021/call-to-action"


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

        <div className="obj-lines obj-max-width" id="top">

          <FixedSides />

          <Grid>
            <GridCell spanMD="8" spanLG="12">
              <SectionHeader title="The Section Header" number="5" total="6" />
            </GridCell>

            <GridCell spanMD="8" spanLG="12">
              <h2 className="cmp-type-section">Pie Charts</h2>
              <hr />
            </GridCell>

            <GridCell start="1" spanMD="6">
              <Figure count={1.1} caption="217 Responses">
                <PieChart
                  styleFormat="large"
                  title={<>Almost <em>40%</em> of systems were successful or very successful</>}
                  dataPoints={[
                    ['Not successful', 4],
                    ['Slightly successful', 19],
                    ['Moderately successful', 38],
                    ['Successful', 31],
                    ['Very successful', 8]
                  ]}>
                  <p>In your opinion, how successful is your organization’s design system?</p>
                  
                </PieChart>
              </Figure>
            </GridCell>

            <GridCell start="1" startLG="9">
              <Figure count={1.1} caption="217 Responses">
                <PieChart
                  headingLevel="h3"
                  styleFormat="small"
                  title={<>What most closely describes your role? <em>(In-House)</em></>}
                  dataPoints={[
                    ['Individual contributor (developer, designer, etc.)', 64],
                    ['Manager', 24],
                    ['Executive', 4]
                  ]}
                />
              </Figure>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell spanMD="8" spanLG="12">
              <h2 className="cmp-type-section">Stacked Bar Charts</h2>
              <hr />
            </GridCell>

            <GridCell start="1" spanMD="6">
              <Figure count={1.2} caption="159 Responses">
                <StackedChart
                  styleFormat="large"
                  title="How much of your website(s) or application(s) is sourced from your design system?"
                  keyMap={[
                    'Less than 25% is from the design system',
                    '25% to 49% is from the design system',
                    '50% to 74% is from the design system',
                    'More than 75% is from the design system',
                    'I am not sure'
                  ]}
                  dataPoints={[
                    ['Not successful', [33, 33, 17, 0, 17]],
                    ['Slightly successful', [58, 32, 10, 0, 0]],
                    ['Moderately successful', [17, 30, 22, 20, 12]],
                    ['Successful', [10, 24, 36, 28, 2]],
                    ['Very successful', [8, 8, 25, 50, 8]]
                  ]}>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, tincidunt magnis pharetra id montes fames himenaeos, torquent dignissim eros nibh eleifend suspendisse.</p>
                </StackedChart>
              </Figure>
            </GridCell>

            <GridCell start="1" startLG="9">
              <Figure count={1.2} caption="159 Responses">
                <StackedChart
                  headingLevel="h3"
                  styleFormat="small"
                  title="How much of your website(s) or application(s) is sourced from your design system?"
                  keyMap={[
                    'Less than 25% is from the design system',
                    '25% to 49% is from the design system',
                    '50% to 74% is from the design system',
                    'More than 75% is from the design system',
                    'I am not sure'
                  ]}
                  dataPoints={[
                    ['Not successful', [33, 33, 17, 0, 17]],
                    ['Slightly successful', [58, 32, 10, 0, 0]],
                    ['Moderately successful', [17, 30, 22, 20, 12]],
                    ['Successful', [10, 24, 36, 28, 2]],
                    ['Very successful', [8, 8, 25, 50, 8]]
                  ]}>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, tincidunt magnis pharetra id montes fames himenaeos, torquent dignissim eros nibh eleifend suspendisse.</p>
                </StackedChart>
              </Figure>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell spanMD="8" spanLG="12">
              <h2 className="cmp-type-section">Bar Charts</h2>
              <hr />
            </GridCell>

            <GridCell start="1" spanLG="6">
              <Figure count={1.4} caption="374 Responses">
                <BarChart
                  styleFormat="large"
                  title="Organization Size"
                  keyMap={[`In-house`, 'Agency']}
                  dataPoints={[
                    ['1-50 Employees', [10, 54]],
                    ['51-2,000 Employees', [43, 33]],
                    ['2,001-10,000+ Employees', [47, 13]]
                  ]}>
                    <p>In house respondents to to work at larger organizations, while agency respondents work primarily at smaller companies.</p>
                </BarChart>
              </Figure>
            </GridCell>

            <GridCell start="1" startMD="5" startLG="9">
              <Figure count={1.4} caption="374 Responses">
                <BarChart
                  headingLevel="h3"
                  startStyle="alt"
                  styleFormat="small"
                  title="Organization Size"
                  keyMap={['In-house', 'Agency']}
                  dataPoints={[
                    ['1-50 Employees', [10, 54]],
                    ['51-2,000 Employees', [43, 33]],
                    ['2,001-10,000+ Employees', [47, 13]]
                  ]}>
                    <p>In house respondents to to work at larger organizations, while agency respondents work primarily at smaller companies.</p>
                </BarChart>
              </Figure>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell spanMD="8" spanLG="12">
              <h2 className="cmp-type-section">Observation/Paragraph</h2>
              <hr />
            </GridCell>

            <GridCell>
              <SlimHeading size="half">Observation</SlimHeading>
              <h3>Thin observation. Best for short body content</h3>
              <Grid>
                <GridCell span="2" spanMD="4" spanLG="6">
                  <p>Iaculis et adipiscing lacinia nam massa ipsum nisi id, donec ante neque cras malesuada aliquam litora, auctor dui vehicula convallis gravida ridiculus eget.</p>
                </GridCell>
              </Grid>
            </GridCell>

            <GridCell startMD="5" startLG="7">
              <SlimHeading size="half">Observation</SlimHeading>
              <h3>Wide observation. Best for long body content</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida mus vulputate, diam lobortis vivamus hendrerit placerat id leo facilisis iaculis, eleifend risus nunc quam a scelerisque tempus duis justo. Risus molestie duis lacus egestas proin porta habitant vehicula sodales eros mus ornare commodo, suspendisse dignissim nostra accumsan ligula parturient tempor gravida mi in nibh vestibulum. Iaculis et adipiscing lacinia nam massa ipsum nisi id, donec ante neque cras malesuada aliquam litora, auctor dui vehicula convallis gravida ridiculus eget.</p>
            </GridCell>

            <GridCell span="3" startMD="5" startLG="7">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, vivamus elementum diam felis ridiculus neque aptent, feugiat convallis dictumst habitasse himenaeos commodo et. Mauris volutpat torquent sollicitudin luctus aenean accumsan dapibus dictumst at, a odio auctor magna molestie conubia phasellus ullamcorper suspendisse taciti, habitasse hendrerit sociis semper leo malesuada laoreet ac.</p>
            </GridCell>

            <GridCell span="2" rowStart="3" align="center">
              <SmallCallout>
                <p>This is a small callout for small observations or short pieces of text.</p>
                <p>Hope you like it.</p>
              </SmallCallout>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell spanMD="8" spanLG="12">
              <h2 className="cmp-type-section">Quote</h2>
              <hr />
            </GridCell>

            <GridCell spanLG="6">
              <Quote
                sizeFormat="large"
                cite="Person Name">
                <p>Lorem ipsum dolor sit amet <em>consectetur adipiscing</em> elit in senectus quis sed cum proin, ac elementum lacus fames fermentum parturient diam curabitur quisque aptent condimentum.</p>
              </Quote>
            </GridCell>

            <GridCell startLG="9">
              <Quote
                decoStyle="alt"
                cite="Person Name">
                 <p><em>Lorem ipsum dolor sit</em> amet consectetur adipiscing elit in senectus quis sed cum proin, ac elementum lacus fames fermentum parturient diam curabitur quisque aptent condimentum.</p>
                </Quote>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell spanMD="8" spanLG="12">
              <h2 className="cmp-type-section">Other Elements</h2>
              <hr />
            </GridCell>

            <GridCell span="2">
              <a href="https://example.com" className="cmp-button">Button (Default)</a>
            </GridCell>

            <GridCell start="3" span="2">
              <a href="https://example.com" className="cmp-button cmp-button--large">Button (Large)</a>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell>

              <CallToAction mark="right">
                <h3>This is a title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sem tellus pellentesque, maecenas risus felis nullam et augue facilisi leo auctor.</p>

                <a href="https://example.com" className="cmp-button cmp-button--inverse">Button (Default)</a>
              </CallToAction>

            </GridCell>
          </Grid>

          <Grid>
            <GridCell span="4" spanMD="8" spanLG="12">
              <CallToAction mark="right">
                <Grid>
                  <GridCell span="4" spanMD="3" spanLG="5">
                    <h2 className="cmp-type-section">Would you join us and help us uncover more answers?</h2>
                    <p className="cmp-type-body-large">Sparkbox conducts this survey annually to give the design system community an opportunity to learn from one another.</p>

                    <a href="https://example.com" className="cmp-button cmp-button--inverse">Button (Default)</a>
                  </GridCell>

                  <GridCell span="4" startMD="5" spanMD="3" startLG="7" spanLG="5">
                    <h3>This is a title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sem tellus pellentesque, maecenas risus felis nullam et augue facilisi leo auctor.</p>

                    <a href="https://example.com" className="cmp-button cmp-button--inverse">Button (Default)</a>
                  </GridCell>
                </Grid>
              </CallToAction>
            </GridCell>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default Page2021
