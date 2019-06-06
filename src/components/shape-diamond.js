import React from "react"
import SVGDiamond from "../components/svg-diamond"


const ShapeDiamond = (props) => (
  <div class="cmp-diamond">
    <div class="cmp-diamond__shape">
      <div class="cmp-diamond__half cmp-diamond__half--top">
        <div class="cmp-diamond__side cmp-diamond__side--1"><SVGDiamond /></div>
        <div class="cmp-diamond__side cmp-diamond__side--2"><SVGDiamond /></div>
        <div class="cmp-diamond__side cmp-diamond__side--3"><SVGDiamond /></div>
      </div>
      <div class="cmp-diamond__half cmp-diamond__half--bottom">
        <div class="cmp-diamond__side cmp-diamond__side--4"><SVGDiamond /></div>
        <div class="cmp-diamond__side cmp-diamond__side--5"><SVGDiamond /></div>
        <div class="cmp-diamond__side cmp-diamond__side--6"><SVGDiamond /></div>
      </div>
    </div>
  </div>
)

export default ShapeDiamond
