import React from "react"

const ChartCard = (props) => (
  <div className="cmp-diagram-chart__item">
    <dt className="cmp-diagram-chart__value-container" style={{"height": props.percent * props.scale + "%"}}>
      <div className="cmp-diagram-chart__value">
        <div className="util-relative util-inline-block">
          {props.percent}<sup className="cmp-diagram-chart__superscript">%</sup>
        </div>
      </div>
      <div className={`cmp-diagram-chart__rectangle cmp-diagram-chart__rectangle--${props.color}`}></div>
    </dt>
    <dd className="cmp-diagram-chart__label">{props.label}</dd>
  </div>
)

export default ChartCard
