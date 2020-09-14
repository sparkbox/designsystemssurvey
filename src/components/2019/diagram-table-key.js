import React, { Fragment } from "react"

const TableKey = (props) => (
  <Fragment>
    <li className={`cmp-key__list-item cmp-key__list-item--${props.color}`}><span className="cmp-key__text">{props.text}</span></li>
  </Fragment>
)

export default TableKey
