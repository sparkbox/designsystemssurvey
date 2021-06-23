import React from "react"
import Grid from "./grid"
import GridCell from "./grid-cell"

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
      <div aria-hidden="true" className="cmp-intro__arrow-positioner">
        <Grid>
          <GridCell start="4" span="1" startMD="7" startLG="9">
            <div className="cmp-intro__arrow-container">
              <svg viewBox="0 0 28 28" className="cmp-intro__arrow" fill="none">
                <path stroke-width="3" d="M2,26 26,2M2,6 2,26 22,26" />
              </svg>
            </div>
          </GridCell>
        </Grid>
      </div>
    </div>
  )
}

export default SiteIntro
