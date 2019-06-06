import React from "react"
import SVGPyramid from "../components/svg-pyramid"

const ShapePyramid = (props) => (
  <div className="cmp-pyramid">
    <div className="cmp-pyramid__shape">
      <div className="cmp-pyramid__side cmp-pyramid__side--1"><SVGPyramid /></div>
      <div className="cmp-pyramid__side cmp-pyramid__side--2"><SVGPyramid /></div>
      <div className="cmp-pyramid__side cmp-pyramid__side--3"><SVGPyramid /></div>
      <div className="cmp-pyramid__side cmp-pyramid__side--4"><SVGPyramid /></div>
    </div>
  </div>
)

export default ShapePyramid
