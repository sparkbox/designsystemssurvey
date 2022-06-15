import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const FixedSides = () => {
  return (
    <div className="cmp-fixed-sides js-section-indicators">
      <AnchorLink className="cmp-fixed-sides__top" href="#top">
        <span className="util-visually-hidden">Back To Top</span>
        <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18V2M1 8l7-7 7 7" stroke="currentColor" strokeWidth="1"/></svg>
      </AnchorLink>
      <AnchorLink className="cmp-fixed-sides__dot" href="#section-1" data-indicator="section-1">
        <span className="util-visually-hidden">Section 1</span>
      </AnchorLink>
      <AnchorLink className="cmp-fixed-sides__dot" href="#section-2" data-indicator="section-2">
        <span className="util-visually-hidden">Section 2</span>
      </AnchorLink>
      <AnchorLink className="cmp-fixed-sides__dot" href="#section-3" data-indicator="section-3">
        <span className="util-visually-hidden">Section 3</span>
      </AnchorLink>
      <AnchorLink className="cmp-fixed-sides__dot" href="#section-4" data-indicator="section-4">
        <span className="util-visually-hidden">Section 4</span>
      </AnchorLink>
      <AnchorLink className="cmp-fixed-sides__dot" href="#section-5" data-indicator="section-5">
        <span className="util-visually-hidden">Section 5</span>
      </AnchorLink>
      <AnchorLink className="cmp-fixed-sides__dot" href="#section-6" data-indicator="section-6">
        <span className="util-visually-hidden">Section 6</span>
      </AnchorLink>
    </div>
  )
}

export default FixedSides
