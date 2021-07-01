import React from "react"
import Grid from "./grid"
import GridCell from "./grid-cell"
import SVGArrow from "./svg-arrow"
import ArtElement from "../../components/2021/art-element"

const SiteIntro = (props) => {
  return (
    <header className="cmp-intro" id="top">
      <h1 className="util-visually-hidden">The 2021 Design Systems Survey by Sparkbox</h1>
      <div aria-hidden="true">
        <div className="cmp-intro__text cmp-intro__text--year">2021</div>
        <div className="cmp-intro__title-container">
          <div className="cmp-intro__text">Design</div>
          <div className="cmp-intro__text">Systems</div>
          <div className="cmp-intro__text">Survey</div>
          <ArtElement isHero="true" />
        </div>
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
    </header>
  )
}

export default SiteIntro
