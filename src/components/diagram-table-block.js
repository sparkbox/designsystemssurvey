import React, { Fragment } from "react"

const TableBlock = (props) => (
  <Fragment>
    <li className={`cmp-row-chart__block cmp-row-chart__block--${props.color}`} style={{"flexBasis": props.percent + "%", "-ms-flex-preferred-size": props.percent + "%"}}><span className="cmp-row-chart__chart-percent">{props.percent}%</span></li>
  </Fragment>
)

export default TableBlock
