import React, { Fragment } from "react"

const TableColumn = (props) => (
  <Fragment>
    <li className="cmp-row-chart__column"><span className="cmp-row-chart__column-text">{props.percent}%</span></li>
  </Fragment>
)

export default TableColumn
