import React from "react"
import ShapePyramid from "./shape-pyramid"
import ShapeCube from "./shape-cube"
import ShapeDiamond from "./shape-diamond"
import ShapeDodecahedron from "./shape-dodecahedron"

const Respondents = () => (
  <div className="cmp-respondents">
    <h3 className="font-diagram-heading">
      In-house Respondents Breakdown
    </h3>
    <ul className="cmp-respondents__list">
      <li className="cmp-respondents__item cmp-respondents__item--designers">
        <span className="cmp-respondents__shape cmp-respondents__shape--designers">
          <ShapePyramid />
        </span>
        <span className="cmp-respondents__stat">
          <span className="cmp-respondents__group cmp-respondents__group--designers">Designers <span className="util-block">and&nbsp;<abbr title="User Experience">UX</abbr></span></span> <mark className="cmp-respondents__number">49<span className="cmp-respondents__percent">%</span></mark>
        </span>
      </li>

      <li className="cmp-respondents__item cmp-respondents__item--developers">
        <span className="cmp-respondents__shape cmp-respondents__shape--developers">
          <ShapeCube />
        </span>
        <span className="cmp-respondents__stat">
          <span className="cmp-respondents__group cmp-respondents__group--developers">Developers</span> <mark className="cmp-respondents__number">39<span className="cmp-respondents__percent">%</span></mark>
        </span>
      </li>

      <li className="cmp-respondents__item cmp-respondents__item--managers">
        <span className="cmp-respondents__shape cmp-respondents__shape--managers">
          <ShapeDiamond />
        </span>
        <span className="cmp-respondents__stat">
          <span className="cmp-respondents__group cmp-respondents__group--managers">Managers</span> <mark className="cmp-respondents__number">8<span className="cmp-respondents__percent">%</span></mark>
        </span>
      </li>

      <li className="cmp-respondents__item cmp-respondents__item--other">
        <span className="cmp-respondents__shape cmp-respondents__shape--other">
          <ShapeDodecahedron />
        </span>
        <span className="cmp-respondents__stat">
          <span className="cmp-respondents__group cmp-respondents__group--other">Other</span> <mark className="cmp-respondents__number">4<span className="cmp-respondents__percent">%</span></mark>
        </span>
      </li>
    </ul>
  </div>
)

export default Respondents

