import React from "react"
import TopFeatureCard from "./top-feature-card"
import TopFeatureListItem from "./top-feature-list-item"

 const TopFeaturesTools = () => (
  <div className="obj-layout-max-width util-margin-top4">
    <p id="table2a" className="font-diagram-heading" aria-label="Top Design System Tools">
      Top Design System Tools
    </p>
    <p className="font-diagram-copy">108 In-House Responses <br /> <em>Respondents were asked to select one&nbsp;answer</em></p>
    <ol className="cmp-percentage-highlight util-margin-top4">
      <TopFeatureCard icon="storybook" firstWord="Storybook" percentage="34" />
      <TopFeatureCard icon="invision" firstWord="InVision" secondWord="Design System Manager" percentage="32" />
      <TopFeatureCard icon="pattern-lab" firstWord="Pattern" secondWord="Lab" percentage="23" />
    </ol>
    <ol className="cmp-percentage-list">
      <TopFeatureListItem item="UXPin" percentage="16" />
      <TopFeatureListItem item="Fractal" percentage="10" />
      <TopFeatureListItem item="KSS" percentage="8" />
      <TopFeatureListItem item="A Homegrown Solution" percentage="7" />
      <TopFeatureListItem item="zeroheight" percentage="6" />
      <TopFeatureListItem item="Sketch" percentage="5" />
      <TopFeatureListItem item="Vue" percentage="4" />
      <TopFeatureListItem item="Abstract" percentage="4" />
      <TopFeatureListItem item="Figma" percentage="4" />
    </ol>
  </div>
)

export default TopFeaturesTools
