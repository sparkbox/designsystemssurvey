import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import SVGArrow from "./svg-arrow"

const TableItem = (props) => {
  return (
    <AnchorLink className="cmp-toc__link" href={`#section-${props.number}`} aria-label={`Section ${props.number}: ${props.children}`}>
      <span className="cmp-toc__section-number">0{props.number}</span>
      <span className="cmp-toc__section-title">{props.children}</span>
      <SVGArrow className="cmp-toc__arrow" />
    </AnchorLink>
  )
}

export default TableItem
