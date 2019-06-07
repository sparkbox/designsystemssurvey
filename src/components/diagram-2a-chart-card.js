import React, { Fragment } from "react"

const Chart2aCard = (props) => (
  <Fragment>
    <dt className="util-relative util-zindex-100 cmp-diagram-chart__container" style={{["--percent"]: props.percent + "%", ["--color"]: `var(--color-${props.color})`}}>
      <div className="cmp-diagram-chart__value">
        <div className="util-relative util-inline-block">
          {props.percent}<sup className="cmp-diagram-chart__superscript">%</sup>
        </div>
      </div>
      <div className="cmp-diagram-chart__rectangle"></div>
    </dt>
    <dd className="cmp-diagram-chart__label">{props.label}</dd>
  </Fragment>
)

export default Chart2aCard
