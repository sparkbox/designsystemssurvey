import React from "react"
import PropTypes from "prop-types"

const SiteIntro = (props) => {
  return (
    <div className="cmp-intro">
      <div className="cmp-intro__text cmp-intro__text--year">2021</div>
      <div className="cmp-intro__title-container">
        <div className="cmp-intro__text">Design</div>
        <div className="cmp-intro__text">Systems</div>
        <div className="cmp-intro__text">Survey</div>
      </div>
      {props.children}
    </div>
  )
}

export default SiteIntro
