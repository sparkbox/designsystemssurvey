import React from 'react'

const SectionIntroBox = (props) => (
  <h2 className={ "cmp-section-intro-box " + props.modifier }>
    <span className="cmp-section-intro-box__roman-numeral">{ props.numeral }</span>
    <span className="cmp-section-intro-box__text">{ props.heading }</span>
    <a href="#" className="cmp-section-intro-box__jump-link">Back to top</a>
  </h2>
)

export default SectionIntroBox
