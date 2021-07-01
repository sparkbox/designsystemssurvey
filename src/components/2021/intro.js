import React from "react"
import Grid from "./grid"
import GridCell from "./grid-cell"
import SVGArrow from "./svg-arrow"

const SiteIntro = (props) => {
  return (
    <div className="cmp-intro" id="top">
      <div className="cmp-intro__text cmp-intro__text--year">2021</div>
      <div className="cmp-intro__title-container">
        <h1 className="util-visually-hidden">Design Systems Survery 2021</h1>
        <div className="cmp-intro__text">Design</div>
        <div className="cmp-intro__text">Systems</div>
        <div className="cmp-intro__text">Survey</div>
      </div>
      {props.children}
      <div aria-hidden="true" className="cmp-intro__arrow-positioner">
        <Grid>
          <GridCell start="3" span="1" startMD="7" startLG="9">
            <div className="cmp-intro__arrow-container">
              <SVGArrow className="cmp-intro__arrow" />
            </div>
          </GridCell>
        </Grid>
      </div>
    </div>
  )
}

export default SiteIntro
