import React from "react"
import SectionHeader from '../../components/2021/section-header'
import Grid from '../../components/2021/grid'
import GridCell from '../../components/2021/grid-cell'
import PieChart from '../../components/2021/pie-chart'
import BarChart from '../../components/2021/bar-chart'
import Quote from '../../components/2021/quote'
import Figure from "../../components/2021/figure"
import SmallCallout from "../../components/2021/small-callout"

const Section2 = () => (
    <Grid>
      <GridCell spanMD="8" spanLG="12">
        <SectionHeader title="Characteristics &amp; Teams" number="2" total="6" />
      </GridCell>

      <GridCell>
        <p>The elements in your design system and the team creating them are foundational to building a quality product. Let’s learn more about the commonalities across our respondents’ design systems.</p>
      </GridCell>

      <GridCell>
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

      <GridCell>
        <p>Most in-house respondents felt that their design system is either moderately successful (38%) or successful to very successful (39%).</p>
      </GridCell>

      <GridCell>
        <Quote cite="Executive, successful design system">
          <p>It has not only outperformed in terms of KPIs, but it has also <em><strong>allowed us to scale more work with fewer people</strong></em>.</p>
        </Quote>
      </GridCell>

      <GridCell>
        <h3>Design system teams</h3>
      </GridCell>

      <GridCell>
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

      <GridCell>
        <Figure count="2.3" caption="171 Responses | Respondents were asked to select all that apply from a list of 19 items with an option to enter other answers.">
          <h4>Color system</h4>
          <p>95%</p>
          <h4>Typography system</h4>
          <p>89%</p>
          <h4>Form components</h4>
          <p>89%</p>
          <h4>Navigation components</h4>
          <p>74%</p>
          <h4>Usage guidelines</h4>
          <p>74%</p>
          <h4>Spacing system</h4>
          <p>73%</p>
          <h4>Design files</h4>
          <p>71%</p>
          <h4>CSS code</h4>
          <p>70%</p>
          <h4>Framework-specific components</h4>
          <p>69%</p>
          <h4>Accessibility guidelines</h4>
          <h4>65%</h4>
          <h4>Grid system</h4>
          <p>64%</p>
          <h4>Layout system</h4>
          <p>64%</p>
          <h4>HTML code</h4>
          <p>61%</p>
          <h4>Brand guidelines</h4>
          <p>60%</p>
          <h4>JavaScript code</h4>
          <p>57%</p>
          <h4>Example page templates</h4>
          <p>50%</p>
          <h4>Content blocks</h4>
          <p>46%</p>
          <h4>Voice & tone guidelines</h4>
          <p>36%</p>
          <h4>Animation system</h4>
          <p>21%</p>
          <h4>Other (please specify)</h4>
          <p>	6%</p>
        </Figure>
      </GridCell>

      <GridCell span="2">
        <SmallCallout>
          <p>16 of the 19 elements were all contained in over 50% of the in-house respondents’ design systems.</p>
        </SmallCallout>
      </GridCell>

      <GridCell>
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
      </GridCell>

      <GridCell>
        <p>&ldquo;Which disciplines do you currently have on your design system team?&rdquo; Responses: 135 | Respondents were asked to select all that apply.</p>
        <p>&ldquo;Which disciplines are you currently missing on your design system team that would be useful right now?&rdquo; Responses: 115 | Respondents were asked to select all that apply.</p>
      </GridCell>

      <GridCell span="2">
        <SmallCallout>
          <p>Most in-house design system teams contain design, development, and UX expertise. Many teams reported needing more resources from product/project management, research, and strategy.</p>
        </SmallCallout>
      </GridCell>

      <GridCell>
        <Figure count="2.5" caption="136 Responses">
          <h3>Most respondent organizations have centralized teams</h3>
          <p>&ldquo;How is your design system <em>team structured</em>?&rdquo;</p>
          <h4>Centralized</h4>
          <p>46%</p>
          <p>of in-house respondents have <strong>a team dedicated to the design system</strong>, based outside of the product-and-features team structure.</p>

          <h4>Solitary</h4>
          <p>26%</p>
          <p>of in-house respondents have <strong>one internal, pre-existing team</strong> that created a design system and owns it, though other teams also use the design system.</p>

          <h4>Federated</h4>
          <p>24%</p>
          <p>of in-house respondents have <strong>individuals from various teams</strong> inside the organization manage the design system, and each of these teams uses the design system.</p>
        </Figure>
      </GridCell>
    </Grid>
  )

export default Section2
