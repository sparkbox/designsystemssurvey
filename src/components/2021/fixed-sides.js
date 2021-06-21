import React from "react"
import Logo from "./logo"

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
        <div>Back To Top</div>
      </div>
    </>
  )
}

export default FixedSides
