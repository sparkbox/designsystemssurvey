import React from "react"
import {PropTypes} from "prop-types"

const ArtElement = (props) => {
  if(props.type==='bars') {
    return (
      <svg className="cmp-art-element cmp-art-element--bars" width="164" height="255" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{stroke: 'var(--color-neutral-3)'}} d="M55.5 20.5h54v186h-54zM1.5.5h54v186h-54zM109.5 68.5h54v186h-54zM55.354 165.072L33.925 186.5M55.353 171.944L40.798 186.5M55.353 178.817L47.67 186.5M55.353 185.69l-.853.853M55.353 158.199L27 186.553M55.353 151.326L20 186.68M55.354 144.454L13.307 186.5M55.353 137.581L6.434 186.5M55.354 130.708l-54 54M55.354 123.835l-54 54M55.354 116.963l-54 54M55.354 110.09l-54 54M55.354 103.217l-54 54M55.354 96.344l-54 54M55.354 89.472l-54 54M55.354 82.599l-54 54M55.354 75.726l-54 54M55.354 68.854l-54 54M55.354 61.981l-54 54M55.354 55.108l-54 54M55.354 48.235l-54 54M55.354 41.363l-54 54M55.354 34.49l-54 54M55.354 27.617l-54 54M55.354 20.744l-54 54.001M55.354 13.872l-54 54M55.354 6.999l-54 54M55 .48L1.354 54.126M48.107.5L1.349 47.254"/>
        <path style={{stroke: 'var(--color-neutral-3)'}} d="M41.354.354l-40 40M34.354.508l-33 33M27.354.635l-26 26M20.616.5L1.354 19.763M13.854.39l-12 12M7 .37L1.35 6.018"/>
      </svg>
    )
  }
  if(props.type==='chart') {
    return (
      <svg className="cmp-art-element cmp-art-element--chart" width="227" height="232" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{stroke: 'var(--color-neutral-3)'}} opacity=".2" d="M232 211.604H0M20.396 0v232M20.396 211.605c38.059-2.623 131.368-27.966 200.131-108.352" />
        <path style={{stroke: 'var(--color-rust)'}} d="M20.396 211.604c35.392-3.456 122.164-36.848 186.109-142.769" />
        <path style={{stroke: 'var(--color-neutral-3)'}} opacity=".2" d="M177.824 212.242V110.264H20.396" />
        <path style={{stroke: 'var(--color-neutral-3)'}} opacity=".2" d="M132.571 212.879v-38.242H20.396M197.582 211.604V84.132H20.396M20.396 211.604c31.998-4.197 110.45-44.745 168.263-173.362" />
      </svg>
    )
  }
  return (
    <svg className={`cmp-art-element ${props.isHero ? "cmp-art-element--hero" : ""}`} width="285" height="237" viewBox="0 0 285 237" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path style={{stroke: 'var(--color-rust)'}} vector-effect="non-scaling-stroke" d="M1.21728 236.5L181.159 58.6754V236.5H1.21728Z" />
      <path style={{stroke: 'var(--color-rust)'}} vector-effect="non-scaling-stroke" d="M181.002 219.903H215.854V38.2439L181.002 73.096" />
      <path style={{stroke: 'var(--color-rust)'}} vector-effect="non-scaling-stroke" d="M215.413 202.805H249.805V21.1462L215.809 55.4675" />
      <path style={{stroke: 'var(--color-rust)'}} vector-effect="non-scaling-stroke" d="M249.907 183.571H284V1.91193L249.926 36.0288" />
    </svg>
  )
}

ArtElement.propTypes = {
  type: PropTypes.string,
  isHero: PropTypes.bool
}

export default ArtElement
