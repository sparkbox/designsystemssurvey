import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Logo from "./logo"
import SVGArrow from "./svg-arrow"

const FixedSides = () => {
  return (
    <>
      <div className="cmp-fixed-left">
        <div>Design Systems Survey</div>
        <a className="cmp-fixed-logo" href="https://sparkbox.com">
          <Logo />
        </a>
      </div>
      <div className="cmp-fixed-right">
        <div>2021</div>
        <AnchorLink className="cmp-back-to-top" href="#top">
          <span className="cmp-back-to-top__text">Back To Top</span>
          <SVGArrow className="cmp-back-to-top__arrow" />
        </AnchorLink>
      </div>
    </>
  )
}

export default FixedSides
