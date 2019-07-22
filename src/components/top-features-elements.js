import React from "react"
import TopFeatureCard from "./top-feature-card"
import TopFeatureListItem from "./top-feature-list-item"

 const TopFeaturesElements = () => (
  <div className="obj-layout-max-width util-margin-top4">
    <p id="table2a" className="font-diagram-heading" aria-label="Top Design System Features">
      Top Design System Features
    </p>
    <p className="font-diagram-copy">163 In-House and Agency Responses <br /> <em>Respondents could select multiple from 19 options and fill out a response to&nbsp;"other"</em></p>
    <ol className="cmp-percentage-highlight util-margin-top2">
      <TopFeatureCard icon="palette" firstWord="Color" secondWord="System" percentage="92" />
      <TopFeatureCard icon="typography" firstWord="Typography" secondWord="System" percentage="89" />
      <TopFeatureCard icon="form" firstWord="Form" secondWord="Components" percentage="88" />
    </ol>
    <ol className="cmp-percentage-list" start="4">
      <TopFeatureListItem item="Navigation Components" percentage="79" />
      <TopFeatureListItem item="CSS Code" percentage="70" />
      <TopFeatureListItem item="HTML Code" percentage="69" />
      <TopFeatureListItem item="Usage Guidelines" percentage="69" />
      <TopFeatureListItem item="Grid System" percentage="68" />
      <TopFeatureListItem item="Spacing System" percentage="66" />
      <TopFeatureListItem item="Layout System" percentage="66" />
      <TopFeatureListItem item="Content Blocks" percentage="63" />
      <TopFeatureListItem item="Brand Guidelines" percentage="62" />
      <TopFeatureListItem item="Design Files" percentage="59" />
      <TopFeatureListItem item="JavaScript Code" percentage="56" />
      <TopFeatureListItem item="Accessibility Guidelines" percentage="55" />
      <TopFeatureListItem item="Framework-specific Components" percentage="53" />
    </ol>
  </div>
)

export default TopFeaturesElements
