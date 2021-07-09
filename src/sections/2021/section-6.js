import React from "react"
import SectionHeader from '../../components/2021/section-header'
import Grid from '../../components/2021/grid'
import GridCell from '../../components/2021/grid-cell'
import ArtElement from "../../components/2021/art-element"

const Section6 = () => (
  <Grid className="util-margin-bottom-20vh">
    <GridCell spanMD="8" spanLG="12">
      <SectionHeader title="Conclusion" number={6} total={6} />
    </GridCell>


    <GridCell span="6" className="util-margin-bottom-md util-margin-bottom-xl@md">
      <p className="cmp-type-body-large">Today’s design system teams are focused on encouraging adoption, engaging contributors, and overcoming debt. And the teams that focus on the majority of these items, along with metrics, are reaping the rewards of more successful systems. As we noted in the <a href="/2018/">2018 Design Systems Survey</a>, “a design system is an investment in your future, and one that takes conversation, collaboration, and expectation-setting to succeed.” It’s clear that a design system alone does not ensure success.</p>
    </GridCell>

    <GridCell startMD="7" rowSpanMD="2" startLG="10">
      <ArtElement />
    </GridCell>

    <GridCell start="2" span="4" startMD="2" startLG="2" spanLG="5" className="util-margin-bottom-md util-margin-bottom-xl@md">
      <h3>How do you build a design system that lives up to the dream?</h3>
    </GridCell>

    <GridCell start="2" span="4" startMD="3" startLG="3" spanLG="6">
      <p className="cmp-type-body-large">If you're having trouble gaining cross-functional buy-in and support, your design system’s success might be in jeopardy.</p>
      <p className="cmp-type-body-large">We’ll be exploring this design system issue and more as we continue interviewing design system team members throughout the year and digging even deeper into this survey’s data.</p>
    </GridCell>
  </Grid>
)

export default Section6
