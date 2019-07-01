import React from "react"
import TopFeatureCard from "./top-feature-card"
import TopFeatureListItem from "./top-feature-list-item"

 const TopFeaturesElements = () => (
  <section className="obj-layout-max-width util-margin-top4">
    <ol className="cmp-percentage-highlight">
      <TopFeatureCard icon="palette" firstWord="Color" secondWord="System" percentage="92" />
      <TopFeatureCard icon="typography" firstWord="Typography" secondWord="System" percentage="89" />
      <TopFeatureCard icon="form" firstWord="Form" secondWord="Components" percentage="88" />
    </ol>
    <ol className="cmp-percentage-list">
      <TopFeatureListItem item="Navigation components" percentage="79" />
      <TopFeatureListItem item="CSS code" percentage="70" />
      <TopFeatureListItem item="HTML code" percentage="69" />
      <TopFeatureListItem item="Usage guidelines" percentage="69" />
      <TopFeatureListItem item="Grid system" percentage="68" />
      <TopFeatureListItem item="Spacing system" percentage="66" />
      <TopFeatureListItem item="Layout system" percentage="66" />
      <TopFeatureListItem item="Content blocks" percentage="63" />
      <TopFeatureListItem item="Brand guidelines" percentage="62" />
      <TopFeatureListItem item="Design files" percentage="59" />
      <TopFeatureListItem item="JavaScript code" percentage="56" />
      <TopFeatureListItem item="Accessibility guidelines" percentage="55" />
      <TopFeatureListItem item="Framework-specific components" percentage="53" />
    </ol>
  </section>
)

export default TopFeaturesElements