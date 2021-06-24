import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const TableItem = (props) => {
  return (
    <AnchorLink className="cmp-toc__link" href={`#section-${props.number}`}>
      <span className="cmp-toc__section-number" aria-label={`Section ${props.number}`}>0{props.number}</span>
      <span className="cmp-toc__section-title">{props.children}</span>
    </AnchorLink>
  )
}

export default TableItem
