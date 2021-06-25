import React from "react"
import SectionHeader from '../../components/2021/section-header'
import Grid from '../../components/2021/grid'
import GridCell from '../../components/2021/grid-cell'
import BarChart from '../../components/2021/bar-chart'
import Figure from "../../components/2021/figure"

const Section1 = () => (
  <Grid className="util-margin-bottom-20vh">
    <GridCell spanMD="8" spanLG="12">
      <SectionHeader title="The Respondents" number="1" total="6" />
    </GridCell>

    <GridCell spanLG="6" className="util-margin-bottom-1xl">
      <p class="cmp-type-body-large">In-house and agency respondents were asked a different set of questions with overlapping topics. In-house respondents offered insight based on their direct perspectives with design systems at their organizations while agency respondents offered insight into their client’s experiences.</p>
    </GridCell>

    <GridCell spanLG="4" className="util-margin-bottom-1xl">
      <Figure count="1.1" caption="376 Responses">
        <p>376 Responses</p>
        <p>217 <em>In-House Respondents with design systems at their organization</em></p>
        <p>159 Agency Respondents who have worked on a design system within the last year</p>
      </Figure>
    </GridCell>

    <GridCell start="2" startMD="6" startLG="9" className="util-margin-bottom-1xl util-margin-top-20vh@md">
      <Figure count="1.2" caption="Responses: In-house: 217; Agency: 159">
        <h2 class="cmp-type-h3">What is your primary discipline?</h2>
        <h3><em>In-House</em></h3>
        <p>39% <em>Development</em></p>
        <p>36% <em>Design</em></p>
        <p>12% <em>User Experience</em></p>

        <h3>Agency</h3>
        <p>52% Development</p>
        <p>21% Design</p>
        <p>12% User Experience</p>
      </Figure>
      <p>The remainder of the respondents were split between project/product management, management, and other.</p>
    </GridCell>

    <GridCell spanLG="6" className="util-margin-bottom-1xl util-margin-bottom-1xl@md">
      <Figure count="1.3" caption="Responses: In-house: 217; Agency: 159">
        <BarChart
          headingLevel="h3"
          startStyle="alt"
          styleFormat="small"
          title={<>What most closely describes your <em>role</em>?</>}
          keyMap={['In-house', 'Agency']}
          dataPoints={[
            ['Individual contributor (developer, designer, etc.)', [64, 56]],
            ['Manager', [24, 16]],
            ['Executive', [4, 6]],
            ['Owner', [4, 8]],
            ['Freelancer or independent consultant', [4, 14]]
          ]}
        />
      </Figure>
    </GridCell>

    <GridCell start="2" startMD="6" startLG="9" className="util-margin-bottom-1xl util-margin-top-20vh@md">
      <Figure count="1.4" caption="Responses: In-house: 217; Agency: 157">
        <BarChart
          headingLevel="h3"
          startStyle="alt"
          styleFormat="small"
          title="How many people are employed by your organization?"
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

    <GridCell span="3" spanMD="6" spanLG="4">
      <h3><em>What is your organization’s industry?</em></h3>
      <p>In-house respondents represented a diverse array of industries such as finance/financial services, telecommunications/IT hardware & software, healthcare & pharmaceuticals, and many more.</p>
    </GridCell>
  </Grid>
)

export default Section1
