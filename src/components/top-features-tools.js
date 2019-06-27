import React from "react"
import TopFeatureCard from "./top-feature-card"
import TopFeatureListItem from "./top-feature-list-item"

 const TopFeaturesTools = () => (
  <section className="obj-layout-max-width util-margin-top4">
    <ol className="cmp-percentage-highlight">
      <TopFeatureCard icon="storybook" firstWord="Storybook" percentage="34" />
      <TopFeatureCard icon="invision" firstWord="InVision" secondWord="Design System Manager" percentage="32" />
      <TopFeatureCard icon="pattern-lab" firstWord="Pattern" secondWord="Lab" percentage="23" />
    </ol>
    <ol className="cmp-percentage-list">
      <TopFeatureListItem item="UXPin" percentage="16" />
      <TopFeatureListItem item="Fractal" percentage="10" />
      <TopFeatureListItem item="KSS" percentage="8" />
      <TopFeatureListItem item="A homegrown solution" percentage="7" />
      <TopFeatureListItem item="zeroheight" percentage="6" />
      <TopFeatureListItem item="Sketch" percentage="5" />
      <TopFeatureListItem item="Vue" percentage="4" />
      <TopFeatureListItem item="Abstract" percentage="4" />
      <TopFeatureListItem item="Figma" percentage="4" />
    </ol>
  </section>
)

export default TopFeaturesTools
