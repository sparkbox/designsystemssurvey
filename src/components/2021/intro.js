import React from "react"
import Grid from "./grid"
import GridCell from "./grid-cell"
import SVGArrow from "./svg-arrow"
import ArtElement from "../../components/2021/art-element"
import { CSSTransition } from 'react-transition-group'

const SiteIntro = (props) => {
  return (
    <header className="cmp-intro" id="top">
      <h1 className="util-visually-hidden">The 2021 Design Systems Survey by Sparkbox</h1>
      <div aria-hidden="true">
        <div className="cmp-intro__text cmp-intro__text--year">2021</div>
        <div className="cmp-intro__title-container">
          <CSSTransition
            in={true}
            timeout={5000}
            className="cmp-intro__text cmp-intro__text--transition"
            appear
          >
            <div>Design</div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={5000}
            className="cmp-intro__text cmp-intro__text--transition"
            appear
          >
            <div>Systems</div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={5000}
            className="cmp-intro__text cmp-intro__text--transition"
            appear
          >
            <div>Survey</div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={6000}
            className="cmp-intro__art-element--transition"
            appear
          >
            <div>
              <ArtElement isHero={true} />
            </div>
          </CSSTransition>
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
