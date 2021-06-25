import React from "react"
import SectionHeader from '../../components/2021/section-header'
import Grid from '../../components/2021/grid'
import GridCell from '../../components/2021/grid-cell'

const Section6 = () => (
  <Grid>
    <GridCell spanMD="8" spanLG="12">
      <SectionHeader title="Conclusion" number="6" total="6" />
    </GridCell>
  
    <GridCell start="1" span="3" startMD="1" startLG="1" spanLG="4">
      <p className="cmp-type-body-large">Today’s design system teams are focused on encouraging adoption, engaging contributors, and overcoming debt. And the teams that focus on the majority of these items, along with metrics, are reaping the rewards of more successful systems. As we <a href="/2018/">noted in 2018</a>, “a design system is an investment in your future, and one that takes conversation, collaboration, and expectation-setting to succeed.” It’s clear that a design system alone does not ensure success.</p>
    </GridCell>
    <GridCell start="2" span="4" startMD="2" startLG="2" spanLG="5">
      <h3>How do you build a design system that lives up to the dream?</h3>
    </GridCell>
    <GridCell start="2" span="4" startMD="3" startLG="3" spanLG="6">
      <p className="cmp-type-body-large">What else sets the most successful systems apart from those who have trouble gaining cross-functional buy-in and support?</p>
      <p className="cmp-type-body-large">We’ll be exploring these questions and more as we continue interviewing design system team members throughout the year and digging even deeper into survey data.</p>
    </GridCell>
  </Grid>
)

export default Section6