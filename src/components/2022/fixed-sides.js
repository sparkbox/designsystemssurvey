import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const FixedSides = () => {
  return (
    <div className="cmp-fixed-sides js-section-indicators" aria-hidden={true}>
      <AnchorLink className="cmp-fixed-sides__top" href="#top">
        <span className="util-visually-hidden">Back To Top</span>
        <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18V2M1 8l7-7 7 7" stroke="currentColor" strokeWidth="1"/></svg>
      </AnchorLink>
      <AnchorLink aria-hidden={true} className="cmp-fixed-sides__dot" href="#section-1" data-indicator="section-1">
        <span className="util-visually-hidden">Section 1: Respondents</span>
      </AnchorLink>
      <AnchorLink aria-hidden={true} className="cmp-fixed-sides__dot" href="#section-2" data-indicator="section-2">
        <span className="util-visually-hidden">Section 2: What’s in a Design System</span>
      </AnchorLink>
      <AnchorLink aria-hidden={true} className="cmp-fixed-sides__dot" href="#section-3" data-indicator="section-3">
        <span className="util-visually-hidden">Section 3: Subscribers’ Needs</span>
      </AnchorLink>
      <AnchorLink aria-hidden={true} className="cmp-fixed-sides__dot" href="#section-4" data-indicator="section-4">
        <span className="util-visually-hidden">Section 4: Maintainers’ Challenges</span>
      </AnchorLink>
      <AnchorLink aria-hidden={true} className="cmp-fixed-sides__dot" href="#section-5" data-indicator="section-5">
        <span className="util-visually-hidden">Section 5: Accepting Contributions</span>
      </AnchorLink>
      <AnchorLink aria-hidden={true} className="cmp-fixed-sides__dot" href="#section-6" data-indicator="section-6">
        <span className="util-visually-hidden">Section 6: Looking Ahead</span>
      </AnchorLink>
    </div>
  )
}

export default FixedSides
