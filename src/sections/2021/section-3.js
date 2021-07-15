import React from "react"
import SectionHeader from '../../components/2021/section-header'
import Grid from '../../components/2021/grid'
import GridCell from '../../components/2021/grid-cell'
import PieChart from '../../components/2021/pie-chart'
import BarChart from '../../components/2021/bar-chart'
import StackedChart from '../../components/2021/stacked-chart'
import Figure from "../../components/2021/figure"
import Quote from "../../components/2021/quote"
import SmallCallout from "../../components/2021/small-callout"
import CallToAction from "../../components/2021/call-to-action"
import  {ScoreCardLarge, ScoreRow} from "../../components/2021/scorecard"
import Number from "../../components/2021/number"
import ArtElement from "../../components/2021/art-element"
import AssessmentLink from "../../components/2021/assessment-link"


const Section3 = () => (
  <Grid className="util-margin-bottom-20vh">
    <GridCell spanMD="8" spanLG="12">
      <SectionHeader title="Priorities &amp; Challenges" number={3} total={6} />
    </GridCell>

    <GridCell spanLG="6" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <p className="cmp-type-body-large">As noted in the <a href="/2020/">2020 Design Systems Survey</a>, “Due to the nature of a design system requiring buy-in and support from multiple disciplines, a design system project often helps break down organizational silos.” Design system teams focus on common areas&#8202;&mdash;&#8202;many of which highlight the importance of cross-team support.</p>
    </GridCell>

    <GridCell span="3" spanLG="4" className="util-margin-bottom-1xl">
      <Figure count={3.1} caption="Responses: 154 | Respondents were asked to select all that&nbsp;apply." direction="left">
        <BarChart
          headingLevel="h3"
          title="Priorities"
          dataPoints={[
            ['Adoption (developer, designer, etc.)', [42]],
            ['Contribution', [37]],
            ['Product road map', [36]],
            ['Overcoming technical/creative debt', [35]],
            ['Project management or process', [29]],
            ['Governance', [23]],
            ['Internal education', [21]],
            ['Proving Value', [21]],
            ['Staffing', [21]],
            ['Funding', [10]],
            ['Finding an executive champion', [7]],
            ['Subscriber engagement', [4]],
            ['Other', [6]]
          ]
        }>
          <p>"What are the <em>top priorities</em> your design system team has at this moment?"</p>
        </BarChart>
      </Figure>
    </GridCell>

    <GridCell start="2" span="3" startMD="5" startLG="7" spanLG="4" className="util-margin-bottom-1xl">
    <Figure count={3.2} caption="Responses: 158 | Respondents were asked to select all that&nbsp;apply." direction="left">
      <BarChart
        headingLevel="h3"
        title="Challenges"
        dataPoints={[
          ['Overcoming technical/creative debt', [47]],
          ['Contribution', [45]],
          ['Adoption', [44]],
          ['Staffing', [39]],
          ['Internal education', [36]],
          ['Product Road Map', [35]],
          ['Governance', [34]],
          ['Project management or process', [32]],
          ['Providing value', [26]],
          ['Funding', [23]],
          ['Finding an executive champion', [16]],
          ['Subscriber engagement', [6]],
          ['Other', [7]]
        ]
      }>
        <p>"What are the <em>top challenges</em> your design system team is facing at this moment"</p>
      </BarChart>
    </Figure>
    </GridCell>

    <GridCell align="center" span="1" className="util-display-none util-display-block@lg">
      <ArtElement type="chart" />
    </GridCell>

    <GridCell startLG="7" spanLG="6" className="util-margin-bottom-1xl">
      <hr className="util-hr-solid util-margin-vertical-lg" />
      <Figure count={3.3}>
        <h3>Top priorities and challenges</h3>
        <p>Across both top priorities and challenges, three areas stood out, which we will explore more deeply in the next sections.</p>
        <ScoreRow>
          <ScoreCardLarge border={false}>
            <Number bold={true}>1</Number>
            <p className="cmp-type-h3">Encouraging Adoption</p>
          </ScoreCardLarge>
          <ScoreCardLarge border={false}>
            <Number bold={true}>2</Number>
            <p className="cmp-type-h3">Engaging<br />Contri&shy;butors</p>
          </ScoreCardLarge>
          <ScoreCardLarge border={false}>
            <Number bold={true}>3</Number>
            <p className="cmp-type-h3">Overcoming Debt</p>
          </ScoreCardLarge>
        </ScoreRow>
      </Figure>
    </GridCell>

    <GridCell span="12" className="util-margin-top-1xl@lg util-margin-bottom-1xl util-margin-bottom-2xl@lg">
      <hr/>
    </GridCell>


    <GridCell span="3" spanMD="6">
      <hr className="util-hr-solid util-margin-vertical-lg" />
    </GridCell>

    <GridCell spanMD="6" className="util-margin-bottom-xl">
      <h2>1 - Encouraging Adoption</h2>
    </GridCell>

    <GridCell align="center" rowSpanMD="2" startMD="8" startLG="12">
      <ArtElement type="bars" />
    </GridCell>

    <GridCell className="util-margin-bottom-1xl">
      <Figure count={3.4} direction="left">
      <ScoreRow>
        <ScoreCardLarge border={false}>
          <h3>Priority</h3>
          <Number large={true} highlight={true}>#1</Number>
          <p>42% of in-house respondents selected increasing adoption as a priority</p>
        </ScoreCardLarge>
        <ScoreCardLarge border={false}>
          <h3>Challenge</h3>
          <Number large={true} highlight={true}>#3</Number>
          <p>44% of in-house respondents selected increasing adoption as a challenge</p>
        </ScoreCardLarge>
      </ScoreRow>
      </Figure>
    </GridCell>

    <GridCell className="util-margin-bottom-1xl">
      <h3>Adoption continues to be a focus for many teams</h3>
      <p>Adoption difficulties have been high on respondents’ lists of concerns since our <a href="/2018/">2018 Design Systems Survey</a> and remain there in 2021.</p>
    </GridCell>

    <GridCell startMD="6" startLG="7" className="util-margin-bottom-1xl">
      <Quote
        styleFormat="small"
        cite="Individual contributor, moderately successful design system">
        <p>When used well it has had a large uplift in sales and performance. However, teams <em><strong>still need to be pushed</strong></em> to use it properly.</p>
      </Quote>
    </GridCell>

    <GridCell startMD="6" startLG="9" className="util-margin-bottom-1xl util-margin-bottom-3xl@md util-margin-bottom-none@lg">
      <Quote
        styleFormat="small"
        decoStyle="alt"
        cite="Individual contributor, unsuccessful design system">
        <p><em><strong>Too few people</strong></em> (developers and designers) use it on a daily basis.</p>
      </Quote>
    </GridCell>

    <GridCell spanMD="6" className="util-margin-bottom-1xl util-margin-bottom-3xl@lg">
      <Figure count={3.5} caption="Responses: 157 | Respondents were asked to select all that apply for &ldquo;What are the top challenges your design system team is facing at this&nbsp;moment?&rdquo;" direction="left">
        <BarChart
          headingLevel="h3"
          styleFormat="large"
          title="Adoption is linked to success"
          dataPoints={[
            ['Very Successful', [9]],
            ['Successful', [22]],
            ['Moderately Successful', [49]],
            ['Slightly Successful', [68]],
            ['Not Successful', [83]]
          ]}
        >
        <p>"In your opinion, how <em>successful</em> is your organization’s design system?" <strong>based on answering "adoption" for</strong> "what are the <em>top challenges</em> your design system team is facing at this moment?"</p>
        </BarChart>
      </Figure>
    </GridCell>

    <GridCell span="3" start="2" alignMD="center" spanMD="4" startLG="9"  className="util-margin-bottom-1xl">
      <p>In-house respondents who perceived their design system as either “very successful” or “successful” were less likely to mention adoption as a challenge than those who reported moderate or little success. And, separately, 52% of agency respondents reported that lack of adoption is one of the most common reasons their clients’ design systems are unsuccessful.</p>
    </GridCell>

    <GridCell spanLG="5" rowSpanMD="3" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count={3.6} caption="Responses: 159">
        <StackedChart
          headingLevel="h3"
          title="Higher use of the design system is linked to success"
          keyMap={[
            'Less than 25% is from the design system',
            '25% to 49% is from the design system',
            '50% to 75% is from the design system',
            'More than 75% is from the design system',
            'I am not sure'
          ]}
          dataPoints={[
            ['Not Successful', [33, 33, 17, 0, 17]],
            ['Slightly Successful', [58, 32, 10, 0, 0]],
            ['Moderately Successful', [17, 30, 22, 20, 12]],
            ['Successful', [10, 24, 36, 28, 2]],
            ['Very Successful', [8, 8, 25, 50, 8]]
          ]}
        >
        <p>"In your opinion, how <em>successful</em> is your organization’s design system?” <strong>based on</strong> “how much of your website(s) or application(s) is <em>sourced</em> from your design system?"</p>
        </StackedChart>
      </Figure>
    </GridCell>

    <GridCell align="top" startMD="8" startLG="12">
      <ArtElement type="bars" />
    </GridCell>

    <GridCell span="3" startMD="7" startLG="9" alignLG="top" className="util-margin-bottom-1xl">
      <SmallCallout>
        <p>The more a design system is used in digital products, the higher it’s perceived as successful by in-house respondents.</p>
      </SmallCallout>
    </GridCell>

    <GridCell align="center" startMD="1" span="1" className="util-display-none util-display-block@lg">
      <ArtElement type="chart" />
    </GridCell>

    <GridCell spanMD="6" startMD="3" startLG="7" className="util-margin-bottom-1xl">
      <CallToAction mark="right">
      <svg style={{maxWidth: 4 + 'rem'}} viewBox="0 0 64 64">
        <path style={{fill: 'var(--color-neutral-1)'}} d="M62 1c.6 0 1 .4 1 1v26.5L35.5 1H62m0-1H33.1L64 30.9V2c0-1.1-.9-2-2-2zM63 35.5V62c0 .6-.4 1-1 1H35.5L63 35.5m1-2.4L33.1 64H62c1.1 0 2-.9 2-2V33.1zM1 35.5L28.5 63H2c-.6 0-1-.4-1-1V35.5m-1-2.4V62c0 1.1.9 2 2 2h28.9L0 33.1zM28.5 1L1 28.5V2c0-.6.4-1 1-1h26.5m2.4-1H2C.9 0 0 .9 0 2v28.9L30.9 0zM26 24.9h12c.6 0 1.1.5 1.1 1.1v12c0 .6-.5 1.1-1.1 1.1H26c-.6 0-1.1-.5-1.1-1.1V26c0-.6.5-1.1 1.1-1.1z M30 14.8H14.9V30zM14.9 34v15.2H30zM49.1 30V14.8H34zM34 49.2h15.1V34z"/>
      </svg>

      <h3>Reaching adoption goals is a common sign of maturity for design system teams. </h3>

      <p>Has your design system met its adoption goals?</p>
      <p>Answer a few questions to find out where you fall within the Design System Maturity Model and get insights and ideas about how you can take your system to the next level.</p>

      <AssessmentLink />
      </CallToAction>
    </GridCell>

    <GridCell span="12" className="util-margin-top-1xl@lg util-margin-bottom-1xl util-margin-bottom-2xl@lg">
      <hr/>
    </GridCell>


    <GridCell span="3" spanMD="4">
      <hr className="util-hr-solid util-margin-vertical-lg" />
    </GridCell>

    <GridCell spanMD="4" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <h2>2 - Engaging Contributors</h2>

      <Figure count={3.7} direction="left">
        <ScoreRow>
          <ScoreCardLarge border={false}>
            <h3>Priority</h3>
            <Number large={true} highlight={true}>#2</Number>
            <p>37% of in-house respondents selected contribution as a priority</p>
          </ScoreCardLarge>
          <ScoreCardLarge border={false}>
            <h3>Challenge</h3>
            <Number large={true} highlight={true}>#2</Number>
            <p>45% of in-house respondents selected contribution as a challenge</p>
          </ScoreCardLarge>
        </ScoreRow>
      </Figure>
    </GridCell>

    <GridCell span="3" spanMD="4" startMD="6" alignMD="end" startLG="9" className="util-margin-bottom-1xl">
      <Quote
        styleFormat="large"
        cite="Individual contributor, slightly successful design system">
        <p>“[Our design system] is quite limited in scope currently, we are <em>concentrating on populating it</em> more than anything else.”</p>
      </Quote>
    </GridCell>

    <GridCell startLG="3" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count={3.8} direction="left" caption="Responses: 135 | Answers were on a scale of 1 to&nbsp;5.">
        <StackedChart
          headingLevel="h3"
          title={<>More frequent contribution by users is linked to success</>}
          keyMap={[
            'They don’t or rarely contribute to the design system (1-2)',
            'They sometimes contribute to the design system (3)',
            'They often or always contribute to the design system (4-5)',
          ]}
          dataPoints={[
            ['Not Successful', [83, 0, 17]],
            ['Slightly Successful', [68, 18, 14]],
            ['Moderately Successful', [48, 34, 18]],
            ['Successful', [49, 28, 23]],
            ['Very Successful', [50, 20, 30]]
          ]}
        >
      <p>"In your opinion, how <em>successful</em> is your organization’s design system?” <strong>based on</strong> “how <em>frequently</em> do design system users contribute to the design system?"</p>
      </StackedChart>
      </Figure>
    </GridCell>

    <GridCell span="3" start="2" spanMD="4" startMD="7" alignMD="center" startLG="9" className="util-margin-bottom-1xl">
      <SmallCallout>
      <p>The more often users contribute to the design system, the more frequently in-house respondents perceive their design system as moderately successful or higher.</p>
      </SmallCallout>
    </GridCell>

    <GridCell span="3" spanMD="5" rowSpanMD="2" alignMD="end" spanLG="6" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count={3.9} caption="Responses: 136 | Answers were on a scale of 1 to&nbsp;5." direction="left">
        <BarChart
          headingLevel="h3"
          title="But contribution is low"
          dataPoints={[
            ['They don’t or rarely contribute to the design system', [17]],
            ['They rarely contribute to the design system', [37]],
            ['They sometimes contribute to the design system', [26]],
            ['They often or always contribute to the design system', [12]],
            ['They always contribute to the design system', [8]],
          ]}
        >
        <p>"How <em>frequently</em> do design system users contribute to the design system?"</p>
      </BarChart>
      </Figure>
    </GridCell>

    <GridCell align="top" startMD="7" startLG="11">
      <ArtElement />
    </GridCell>

    <GridCell span="3" spanMD="4" startMD="7" spanLG="2" startLG="9" alignMD="end" className="util-margin-bottom-1xl">
      <SmallCallout>
        <p>54% of in-house respondents reported that their design system users rarely contribute to the system or don’t contribute at all.</p>
      </SmallCallout>
    </GridCell>

    <GridCell startLG="3" className="util-margin-bottom-1xl">
      <Figure
        className="util-margin-bottom-md util-margin-bottom-1xl@md"
        count={3.10}
        direction="left"
        caption="Respondents: 136 | Answers were on a scale of 1 to&nbsp;5."
      >
        <StackedChart
          headingLevel="h3"
          title="More defined process is linked to increased contribution"
          keyMap={[
            'They don’t or rarely contribute to the design system (1-2)',
            'They sometimes contribute to the design system (3)',
            'They often or always contribute to the design system (4-5)',
          ]}
          dataPoints={[
            ['Not Defined to somewhat defined (1-2)', [74, 8, 18]],
            ['Moderately Defined (3)', [40, 43, 17]],
            ['Well and very well defined (4-5)', [44, 31, 26]],
          ]}
        >
        <p>"How <em>defined</em> is your process that enables design system users to contribute to the design system?” <strong>based on</strong> “how <em>frequently</em> do design system users contribute to the design system?"</p>
      </StackedChart>
      </Figure>

      <SmallCallout>
        <p>Having a more defined process for contributing to the design system increases the frequency that users contribute to the system.</p>
      </SmallCallout>
    </GridCell>

    <GridCell startMD="6" startLG="9" className="util-margin-bottom-1xl util-margin-top-3xl@md util-margin-bottom-3xl@md">
      <Figure
        className="util-margin-bottom-md util-margin-bottom-1xl@md util-margin-top-2xl@md"
        count={3.11}
        direction="left"
        caption="Respondents: 135 | Answers were on a scale of 1 to&nbsp;5."
      >
        <StackedChart
          headingLevel="h3"
          title="More defined process is linked to success"
          keyMap={[
            'Not defined to somewhat defined (1–2)',
            'Moderately defined (3)',
            'Well and very well defined (4–5)',
          ]}
          dataPoints={[
            ['Not Successful', [33, 33, 33]],
            ['Slightly Successful', [68, 29, 4]],
            ['Moderately Successful', [30, 34, 36]],
            ['Successful', [32, 36, 32]],
            ['Very Successful', [10, 50, 40]]
          ]}
        >
        <p>"In your opinion, how <em>successful</em> is your organization’s design system?” <strong>based on</strong> “how <em>defined</em> is your process that enables design system users to contribute to the design system?"</p>
      </StackedChart>
      </Figure>

      <SmallCallout>
        <p>And having a more defined contribution model contributes to the design system’s overall perceived success by in-house respondents.</p>
      </SmallCallout>
    </GridCell>

    <GridCell start="2" startMD="1" spanMD="5" spanLG="6" className="util-margin-bottom-1xl">
      <Figure count={3.12} caption="Respondents: 136 | Answers were on a scale of 1 to&nbsp;5." direction="left">
        <BarChart
          headingLevel="h3"
          title="But most systems don’t have a well-defined process"
          dataPoints={[
            ['Not define (1)', [17]],
            ['Somewhat defined (2)', [20]],
            ['Moderately defined (3)', [35]],
            ['Well defined (4)', [14]],
            ['Very well defined (5)', [15]],
          ]}
        >
        <p>"How <em>defined</em> is your process that enables design system users to contribute to the design system?"</p>
      </BarChart>
      </Figure>
    </GridCell>

    <GridCell span="3" start="2" startMD="7" spanMD="2" startLG="9" alignMD="end" className="util-margin-bottom-1xl">
      <SmallCallout>
        <p>Only 29% of respondents rated their contribution process as well defined or very well defined. And, separately, only 27% of agency respondents reported that they recommend a contribution model to their clients.</p>
      </SmallCallout>
    </GridCell>

    <GridCell span="12" className="util-margin-top-1xl@lg util-margin-bottom-1xl util-margin-bottom-2xl@lg">
      <hr/>
    </GridCell>


    <GridCell span="3" spanMD="4">
      <hr className="util-hr-solid util-margin-vertical-lg" />
    </GridCell>

    <GridCell spanMD="4" className="util-margin-bottom-1xl">
      <h2>3 - Overcoming Debt</h2>

      <Figure count={3.13} direction="left">
        <ScoreRow>
          <ScoreCardLarge border={false}>
            <h3>Priority</h3>
            <Number large={true} highlight={true}>#4</Number>
            <p>35% of in-house respondents selected overcoming debt as a priority</p>
          </ScoreCardLarge>
          <ScoreCardLarge border={false}>
            <h3>Challenge</h3>
            <Number large={true} highlight={true}>#1</Number>
            <p>47% of in-house respondents selected overcoming debt as a challenge</p>
          </ScoreCardLarge>
        </ScoreRow>
      </Figure>
    </GridCell>

    <GridCell start="2" span="3" spanMD="4" startMD="6" alignMD="end" startLG="8" spanLG="5" className="util-margin-bottom-1xl util-margin-top-3xl@md util-margin-bottom-3xl@md">
      <Quote styleFormat="small"
      cite="Manager, moderately successful design system">
        <p>“Nothing can account for the impact to various development stacks in the product. <em><strong>A design system will always produce some technical debt</strong></em>.”</p>
      </Quote>

      <Quote styleFormat="small"
      cite="Individual contributor, successful design system">
        <p>“All system choices, especially first-iteration ones made because of resource limitations on the design system team's side impose limitations on products. This limits the evolution of products unless they break free of the system. <em><strong>Future iterations of the system need to support both a future vision as well as a current state</strong></em>, causing a constant deprecated vs not-built-yet state. This interaction can cause deadlock between the system, the platform, and the products.”</p>
      </Quote>
    </GridCell>

    <GridCell span="3" spanMD="4" rowSpanMD="2" startLG="3" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <Figure count={3.14} caption="Responses: 136">
        <PieChart
          headingLevel="h3"
          styleFormat="small"
          title="Many teams feel their design system is creating debt"
          dataPoints={[
            ['It created debt', 53],
            ['It did not create debt', 32],
            ['I dont know', 15]
          ]}
        >
          <p>"Do you feel the way the design system was originally built did or did not <em>create debt</em> for the technical or design departments?"</p>
        </PieChart>
      </Figure>
    </GridCell>

    <GridCell align="center" startMD="8" startLG="12">
      <ArtElement type="bars" />
    </GridCell>

    <GridCell span="3" spanMD="4" startMD="7" alignMD="end" startLG="9" spanLG="2" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <SmallCallout>
        <p>53% of in-house respondents reported that their design system creates debt. And, separately, agency respondents agreed, with 47% saying that they believe their clients’ design systems create debt.</p>
      </SmallCallout>
    </GridCell>

    <GridCell className="util-margin-bottom-md">
      <h3>What Causes Debt?</h3>
      <p>When asked about the causes for technical and design debt in an open-ended question, in-house respondents’ top reasons include poor implementation (19 of 42 responses) and updating pre-existing products (11 of 42 responses).</p>
    </GridCell>

    <GridCell start="2" startLG="1" spanLG="3" alignMD="top" className="util-margin-bottom-lg@md util-margin-bottom-3xl@lg">
      <Quote styleFormat="small"
      cite="Individual contributor, moderately successful design system">
        <p>The documentation was incomplete, and thus the proper <em><strong>technical implementation was partial guesswork</strong></em> (guidance not in place)</p>
      </Quote>
    </GridCell>

    <GridCell start="2" startMD="4" startLG="5" spanLG="3" alignMD="center" className="util-margin-bottom-lg@md util-margin-bottom-3xl@lg">
      <Quote styleFormat="small"
      cite="Individual contributor, slightly successful design system">
        <p>In an effort to move fast, many projects result in ‘we can incorporate this into the system later’ or <em><strong>‘we can update this after we ship.’</strong></em></p>
      </Quote>
    </GridCell>

    <GridCell spanMD="6" startLG="9" spanLG="4" alignLG="end" className="util-margin-bottom-2xl util-margin-top-1xl@lg util-margin-bottom-3xl@md">
      <Quote styleFormat="small"
      cite="Manager, slightly successful design system">
        <p>... we created the design system based on an existing product, there has been debt because it wasn't built from components to start with. However, all features within the product that have been updated over the years are now debt-free (both design and tech). So it's a tricky one to answer. We have a web product which was built from scratch off DS components and that has no debt. I think <em><strong>debt is created/related to when the DS was implemented along the lifecycle of the product/s it's supporting.</strong></em></p>
      </Quote>
    </GridCell>

    <GridCell spanMD="5" startLG="3" spanLG="6" className="util-margin-bottom-md util-margin-bottom-3xl@md">
      <Figure count={3.15} caption="Responses: 135">
        <StackedChart
          headingLevel="h3"
          title={<>Debt didn’t impact perceived success </>}
          keyMap={[
            'It created debt',
            'It did not created debt',
            `I don't know`
          ]}
          dataPoints={[
            ['Not Successful', [83, 17, 0]],
            ['Slightly Successful', [50, 32, 18]],
            ['Moderately Successful', [50, 34, 16]],
            ['Successful', [53, 32, 15]],
            ['Very Successful', [50, 40, 10]]
          ]}
        >
          <p>"In your opinion, how <em>successful</em> is your organization's design system" <strong>based on</strong> "do you feel the way the design system was originally built did or did not <em>create debt</em> for the technical or design departments?"</p>
        </StackedChart>
      </Figure>
    </GridCell>

    <GridCell startMD="7" alignMD="end" startLG="10" spanLG="3" className="util-margin-bottom-1xl util-margin-bottom-3xl@md">
      <SmallCallout>
        <p>Though many respondents thought their design system(s) created debt, this did not correlate to the perception of a less successful design system.</p>
      </SmallCallout>
    </GridCell>

    <GridCell spanLG="5">
      <h3>How is it that respondents could report debt being a major challenge, but it doesn’t impact perceived success?</h3>
      <p>One possible explanation could lie in some open-ended answers in which 9 of 42 in-house respondents mentioned that debt seemed unavoidable in an initiative of this size and scope.</p>
    </GridCell>

    <GridCell start="2" startMD="7" startLG="7" className="util-margin-top-1xl@md util-margin-bottom-md">
      <Quote styleFormat="small"
      cite="Individual contributor, successful design system">
        <p>Everything causes tech/design debt. <em>It's unavoidable</em>…Honestly, I feel this is just the curse of software development.</p>
      </Quote>
    </GridCell>

    <GridCell start="2" startMD="6" startLG="8" spanMD="5" className="util-margin-bottom-1xl">
      <Quote styleFormat="small"
      cite="Manager, moderately successful design system">
        <p>How would it not? Any legacy product would need a facelift. Any new product must adhere to guidelines. Yes, there are ways to streamline this, and in some cases the product development process speeds up... <em>A design system will always produce some technical debt</em>.</p>
      </Quote>
    </GridCell>
  </Grid>
)

export default Section3
