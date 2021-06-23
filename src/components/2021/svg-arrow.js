import React from "react"

const SVGArrow = (props) => {
  return (
    <svg viewBox="0 0 28 28" {...props} fill="none">
      <path stroke-width="4" d="M2,26 26,2M2,6 2,26 22,26" />
    </svg>
  )
}

export default SVGArrow
