import React from "react"

import Helmet from "react-helmet"

import Intro from "../components/Intro.js"
import SectionIntroBox from "../components/section-intro-box"
import Section1 from "../sections/section-1"
import Section2 from "../sections/section-2"
import Section3 from "../sections/section-3"

import "../scss/base.scss"

const Page2020 = () => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;700&display=swap" rel="stylesheet" /> 
    </Helmet>

    <Intro />

    <SectionIntroBox heading="First Section" modifier="cmp-section-intro-box--set-1" numeral="I" />
    <div className="obj-limit-width cmp-body-text">
      <Section1 />
    </div>

    <SectionIntroBox heading="Second Section" modifier="cmp-section-intro-box--set-2" numeral="II" />
    <div className="obj-limit-width cmp-body-text">
      <Section2 />
    </div>

    <SectionIntroBox heading="Third Section" modifier="cmp-section-intro-box--set-3" numeral="III" />
    <div className="obj-limit-width cmp-body-text">
      <Section3 />
    </div>
  </>
)

export default Page2020
