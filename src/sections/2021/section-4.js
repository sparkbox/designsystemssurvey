import React from "react"

import SectionHeader from "../../components/2021/section-header"
import Grid from "../../components/2021/grid"
import GridCell from "../../components/2021/grid-cell"
import Figure from "../../components/2021/figure"
import StackedChart from "../../components/2021/stacked-chart"
import SmallCallout from "../../components/2021/small-callout"
import BarChart from "../../components/2021/bar-chart"
import  {ScoreCard, ScoreRow} from "../../components/2021/scorecard"
import Number from "../../components/2021/number"

const Section4 = () => (
  <Grid className="util-margin-bottom-20vh">
    <GridCell spanMD="8" spanLG="12">
      <SectionHeader title="Metrics" number="4" total="6" />
    </GridCell>

    <GridCell spanLG="6" className="util-margin-bottom-1xl">
      <p className="cmp-type-body-large">46% of in-house respondents have dedicated design system teams&mdash;but even non-dedicated teams have to get approval to spend time on the system. While the promise of a design system may be enough to gain support on day one, as systems get older, it’s natural that teams need to prove their value. Enter metrics.</p>
    </GridCell>

    <GridCell span="3" spanMD="4" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count="4.1" caption="159 Responses" className="util-margin-bottom-1xl">
        <StackedChart
          styleFormat="small"
          title="Tracking metrics is linked to success"
          keyMap={[
            'Yes, we track metrics',
            'No, we do not track metrics',
            'I am not sure',
          ]}
          dataPoints={[
            ['Not successful', [100, 0, 0]],
            ['Slightly successful', [16, 74, 10]],
            ['Moderately successful', [23, 67, 10]],
            ['Successful', [48, 42, 10]],
            ['Very successful', [50, 42, 8]]
          ]}>
            <p>"In your opinion, how <em>successful</em> is your organization's design system" <strong>based on</strong> "does your organization <em>track metrics</em> for your design system?"</p>
        </StackedChart>
      </Figure>

      <SmallCallout>
        <p>In-house teams who track design system metrics perceive their systems as more successful.</p>
      </SmallCallout>
    </GridCell>

    <GridCell startMD="7" spanLG="5" align="end" className="util-margin-top-3xl@md util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count="4.2" caption="160 Responses" className="util-margin-bottom-1xl">
        <BarChart
          headingLevel="h3"
          styleFormat="small"
          title="But many aren’t tracking metrics"
          dataPoints={[
            ['Yes, we track metrics', [31]],
            ['No, we do not track metrics', [59]],
            ['I am not sure', [9]]
          ]}>
            <p>“Does your organization <em>track metrics</em> for your design system?”</p>
        </BarChart>
      </Figure>

      <SmallCallout>
        <p>59% of in-house respondents don’t track design system metrics. And, separately, 45% of agency respondents reported that they don’t actively recommend that their clients track design system metrics.</p>
      </SmallCallout>
    </GridCell>

    <GridCell spanLG="6" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count="4.3" caption="50 Responses">
        <h3>Design system teams track similar metrics</h3>
        <p>“<em>Which metrics</em> are you tracking?”</p>
        <ScoreRow>
          <ScoreCard>
            <Number>88%</Number>
            <p className="cmp-type-sans-micro">Usage</p>
          </ScoreCard>
          <ScoreCard>
            <Number>84%</Number>
            <p className="cmp-type-sans-micro">Adopt&shy;ion</p>
          </ScoreCard>
          <ScoreCard>
            <Number>76%</Number>
            <p className="cmp-type-sans-micro">Access&shy;ibillity</p>
          </ScoreCard>
          <ScoreCard>
            <Number>64%</Number>
            <p className="cmp-type-sans-micro">Effic&shy;iency</p>
          </ScoreCard>
          <ScoreCard>
            <Number>64%</Number>
            <p className="cmp-type-sans-micro">Engage&shy;ment</p>
          </ScoreCard>
          <ScoreCard>
            <Number>62%</Number>
            <p className="cmp-type-sans-micro">Usabil&shy;ity</p>
          </ScoreCard>
          <ScoreCard>
            <Number>56%</Number>
            <p className="cmp-type-sans-micro">Consi&shy;stency</p>
          </ScoreCard>
        </ScoreRow>
      </Figure>
    </GridCell>

    <GridCell span="3" spanMD="2" align="center" startMD="7" startLG="9" className="util-margin-bottom-1xl">
      <SmallCallout>
        <p>Among in-house teams who are tracking metrics, the top areas tracked include usage, adoption, and accessibility.</p>
      </SmallCallout>
    </GridCell>

    <GridCell startMD="2" spanMD="6" startLG="3" className="util-margin-bottom-1xl">
      <Figure count="4.4" caption="38 Responses | Respondents were asked to select all that apply.">
        <BarChart
          headingLevel="h3"
          styleFormat="small"
          title="Teams share metrics in different ways"
          dataPoints={[
            ['Regularly held or special meetings', [39]],
            ['Announcements in communication channels', [32]],
            ['Newsletters', [21]],
            ['We include metrics in the design system', [16]],
            ['We do not share our design system metrics', [29]],
            ['I am not sure', [11]],
            ['Other', [13]]
          ]}>
            <p>“How are you <em>reporting</em> your design system metrics?”</p>
        </BarChart>
      </Figure>
    </GridCell>
  </Grid>
)

export default Section4
