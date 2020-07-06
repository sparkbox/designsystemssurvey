import React, { Component, createRef } from "react"
import ShapePyramid from "./shape-pyramid"
import ShapeCube from "./shape-cube"
import ShapeDiamond from "./shape-diamond"
import ShapeDodecahedron from "./shape-dodecahedron"
import observe from "../js/toggle-animation"

class Respondents extends Component {
  constructor(props) {
    super(props);
    this.respondents = createRef();
  }

  componentDidMount() {
    const respondentsObserver = () => {
      observe(this.respondents, 'cmp-respondents--animated');
    }

    requestAnimationFrame(respondentsObserver);
  }

  render() {
    return (
      <div ref={this.respondents} className="cmp-respondents">
        <h3 className="font-diagram-heading">
          In-house Respondents Breakdown
        </h3>
        <ul className="cmp-respondents__list">
          <li className="cmp-respondents__item cmp-respondents__item--designers">
            <div className="cmp-respondents__shape cmp-respondents__shape--designers">
              <ShapePyramid />
            </div>
            <span className="cmp-respondents__stat">
              <span className="cmp-respondents__group cmp-respondents__group--designers">Designers<br />and&nbsp;<abbr title="User Experience">UX</abbr></span> <mark className="cmp-respondents__number">49<span className="cmp-respondents__percent">%</span></mark>
            </span>
          </li>

          <li className="cmp-respondents__item cmp-respondents__item--developers">
            <div className="cmp-respondents__shape cmp-respondents__shape--developers">
              <ShapeCube />
            </div>
            <span className="cmp-respondents__stat">
              <span className="cmp-respondents__group cmp-respondents__group--developers">Developers</span> <mark className="cmp-respondents__number">39<span className="cmp-respondents__percent">%</span></mark>
            </span>
          </li>

          <li className="cmp-respondents__item cmp-respondents__item--managers">
            <div className="cmp-respondents__shape cmp-respondents__shape--managers">
              <ShapeDiamond />
            </div>
            <span className="cmp-respondents__stat">
              <span className="cmp-respondents__group cmp-respondents__group--managers">Managers</span> <mark className="cmp-respondents__number">8<span className="cmp-respondents__percent">%</span></mark>
            </span>
          </li>

          <li className="cmp-respondents__item cmp-respondents__item--other">
            <div className="cmp-respondents__shape cmp-respondents__shape--other">
              <ShapeDodecahedron />
            </div>
            <span className="cmp-respondents__stat">
              <span className="cmp-respondents__group cmp-respondents__group--other">Other</span> <mark className="cmp-respondents__number">4<span className="cmp-respondents__percent">%</span></mark>
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Respondents
