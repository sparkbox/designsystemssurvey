import React from "react"

const TopFeatureListItem = (props) => (
  <li className="cmp-percentage-list__item"><span>{props.item}&nbsp;<mark className="util-bold">{props.percentage}%</mark></span></li>
)

export default TopFeatureListItem
