import React from "react"
import SectionHeader from "../../components/2021/section-header"
import Grid from "../../components/2021/grid"
import GridCell from "../../components/2021/grid-cell"
import PieChart from "../../components/2021/pie-chart"
import BarChart from "../../components/2021/bar-chart"
import Quote from "../../components/2021/quote"
import Figure from "../../components/2021/figure"
import SmallCallout from "../../components/2021/small-callout"
import  {ScoreCard, ScoreCardLarge, ScoreRow} from "../../components/2021/scorecard"
import Number from "../../components/2021/number"

const Section2 = () => (
    <Grid className="util-margin-bottom-20vh">
      <GridCell spanMD="8" spanLG="12">
        <SectionHeader title="Characteristics &amp; Teams" number="2" total="6" />
      </GridCell>

      <GridCell spanLG="6" className="util-margin-bottom-1xl">
        <p class="cmp-type-body-large">The elements in your design system and the team creating them are foundational to building a quality product. Let’s learn more about the commonalities across our respondents’ design systems.</p>
      </GridCell>

      <GridCell span="3" spanLG="6" className="util-margin-bottom-1xl">
        <Figure count="1.1" caption="159 Responses">
          <PieChart
            styleFormat="large"
            title="Almost 40% of systems were successful or very successful"
            dataPoints={[
              ['Not successful', 4],
              ['Slightly successful', 19],
              ['Moderately successful', 38],
              ['Successful', 31],
              ['Very successful', 8]]
          }>
            <p>&ldquo;In your opinion, how <em>successful</em> is your organization’s design system?&rdquo;</p>
          </PieChart>
        </Figure>
      </GridCell>

      <GridCell startMD="6" alignMD="center" startLG="9" spanLG="4" className="util-margin-bottom-1xl">
        <p>Most in-house respondents felt that their design system is either moderately successful (38%) or successful to very successful (39%).</p>

        <Quote cite="Executive, successful design system">
          <p>It has not only outperformed in terms of KPIs, but it has also <em><strong>allowed us to scale more work with fewer people</strong></em>.</p>
        </Quote>
      </GridCell>

      <GridCell start="2" span="3" startMD="3" spanMD="6" startLG="6" spanLG="7" className="util-margin-bottom-1xl">
        <Figure count="2.2" caption="171 Responses">
          <PieChart
            title="Individual contributors usually suggest design systems"
            dataPoints={[
              ['An individual contributor(s) suggested starting a design system', 57],
              ['Leadership suggested starting a design system', 22],
              ['A third party suggested starting a design system', 3],
              ['A combination of one or more of the above', 2],
              ['I am not sure/other', 16]
            ]}
          >
            <p>&ldquo;Where did the <em>idea</em> for your current design system begin?&rdquo;</p>
          </PieChart>
        </Figure>
      </GridCell>

      <GridCell span="4" spanMD="6" spanLG="6" className="util-margin-bottom-1xl">
        <Figure count="2.3" caption="171 Responses | Respondents were asked to select all that apply from a list of 19 items with an option to enter other answers.">
          <ScoreRow>
            <ScoreCardLarge border={false}>
              <h4>Color system</h4>
              <Number large={true} highlight={true}>95%</Number>
            </ScoreCardLarge>
            <ScoreCardLarge border={false}>
              <h4>Typography system</h4>
              <Number large={true} highlight={true}>89%</Number>
            </ScoreCardLarge>
            <ScoreCardLarge border={false}>
              <h4>Form components</h4>
              <Number large={true} highlight={true}>89%</Number>
            </ScoreCardLarge>
          </ScoreRow>
          <ScoreRow>
            <ScoreCard>
              <Number>74%</Number>
              <p class="cmp-type-sans-micro">Navi&shy;gation compon&shy;ents</p>
            </ScoreCard>
            <ScoreCard>
              <Number>74%</Number>
              <p class="cmp-type-sans-micro">Usage guide&shy;lines</p>
            </ScoreCard>
            <ScoreCard>
              <Number>73%</Number>
              <p class="cmp-type-sans-micro">Spacing system</p>
            </ScoreCard>
            <ScoreCard>
              <Number>71%</Number>
              <p class="cmp-type-sans-micro">Design files</p>
            </ScoreCard>
            <ScoreCard>
              <Number>70%</Number>
              <p class="cmp-type-sans-micro">CSS code</p>
            </ScoreCard>
            <ScoreCard>
              <Number>69%</Number>
              <p class="cmp-type-sans-micro">Frame&shy;work-specific components</p>
            </ScoreCard>
            <ScoreCard>
              <Number>65%</Number>
              <p class="cmp-type-sans-micro">Accessi&shy;bility guidelines</p>
            </ScoreCard>
            <ScoreCard>
              <Number>64%</Number>
              <p class="cmp-type-sans-micro">Grid system</p>
            </ScoreCard>
            <ScoreCard>
              <Number>64%</Number>
              <p class="cmp-type-sans-micro">Layout system</p>
            </ScoreCard>
            <ScoreCard>
              <Number>61%</Number>
              <p class="cmp-type-sans-micro">HTML code</p>
            </ScoreCard>
            <ScoreCard>
              <Number>60%</Number>
              <p class="cmp-type-sans-micro">Brand guide&shy;lines</p>
            </ScoreCard>
            <ScoreCard>
              <Number>57%</Number>
              <p class="cmp-type-sans-micro">Java&shy;Script code</p>
            </ScoreCard>
            <ScoreCard>
              <Number>50%</Number>
              <p class="cmp-type-sans-micro">Example page temp&shy;lates</p>
            </ScoreCard>
            <ScoreCard>
              <Number>46%</Number>
              <p class="cmp-type-sans-micro">Content blocks</p>
            </ScoreCard>
            <ScoreCard>
              <Number>36%</Number>
              <p class="cmp-type-sans-micro">Voice & tone guide&shy;lines</p>
            </ScoreCard>
            <ScoreCard>
              <Number>21%</Number>
              <p class="cmp-type-sans-micro">Anima&shy;tion system</p>
            </ScoreCard>
            <ScoreCard>
              <Number>6%</Number>
              <p class="cmp-type-sans-micro">Other (please specify)</p>
            </ScoreCard>
          </ScoreRow>
        </Figure>
      </GridCell>

      <GridCell span="2" startMD="7" spanMD="4" alignMD="center" startLG="9" spanLG="2" className="util-margin-bottom-1xl">
        <SmallCallout>
          <p>16 of the 19 elements were all contained in over 50% of the in-house respondents’ design systems.</p>
        </SmallCallout>
      </GridCell>

      <GridCell start="2" startMD="1" spanMD="2" alignMD="center" className="util-margin-bottom-1xl">
        <SmallCallout>
          <p>Most in-house design system teams contain design, development, and UX expertise. Many teams reported needing more resources from product/project management, research, and strategy.</p>
        </SmallCallout>
      </GridCell>

      <GridCell startMD="4" spanMD="6" startLG="7" spanLG="6" className="util-margin-bottom-1xl">
        <Figure count="2.4" caption="374 Responses">
          <BarChart
            styleFormat="large"
            title="Teams are lacking certain disciplines"
            keyMap={[
              '&ldquo;Which disciplines do you <em>currently have</em> on your design system team?&rdquo;',
              '&ldquo;Which disciplines are you <em>currently missing</em> on your design system team that would be useful right now?&rdquo;'
            ]}
            dataPoints={[
              ['Design', [94, 9]],
              ['Development', [87, 23]],
              ['User Experience', [71, 16]],
              ['Management', [41, 26]],
              ['Project/Product Management', [30, 47]],
              ['Research', [25, 44]],
              ['Strategy', [19, 37]],
              ['Marketing', [6, 26]],
              ['Other (please specify)', [10, 15]]
            ]}>
              <p>In house respondents to to work at larger organizations, while agency respondents work primarily at smaller companies.</p>
          </BarChart>
        </Figure>

        <p>&ldquo;Which disciplines do you currently have on your design system team?&rdquo; Responses: 135 | Respondents were asked to select all that apply.</p>
        <p>&ldquo;Which disciplines are you currently missing on your design system team that would be useful right now?&rdquo; Responses: 115 | Respondents were asked to select all that apply.</p>
      </GridCell>

      <GridCell spanMD="6">
        <Figure count="2.5" caption="136 Responses">
          <h3>Most respondent organizations have centralized teams</h3>
          <p>&ldquo;How is your design system <em>team structured</em>?&rdquo;</p>
          <ScoreRow>
            <ScoreCardLarge border={false}>
              <h4>Centralized</h4>
              <Number large={true} highlight={true}>46%</Number>
              <p>of in-house respondents have <strong>a team dedicated to the design system</strong>, based outside of the product-and-features team structure.</p>
            </ScoreCardLarge>
            <ScoreCardLarge border={false}>
              <h4>Solitary</h4>
              <Number large={true} highlight={true}>26%</Number>
              <p>of in-house respondents have <strong>one internal, pre-existing team</strong> that created a design system and owns it, though other teams also use the design system.</p>
            </ScoreCardLarge>
            <ScoreCardLarge border={false}>
              <h4>Federated</h4>
              <Number large={true} highlight={true}>24%</Number>
              <p>of in-house respondents have <strong>individuals from various teams</strong> inside the organization manage the design system, and each of these teams uses the design system.</p>
            </ScoreCardLarge>
          </ScoreRow>
        </Figure>
      </GridCell>
    </Grid>
  )

export default Section2
