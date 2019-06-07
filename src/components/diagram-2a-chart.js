import React, { Fragment } from "react"
import Chart2aCard from "./diagram-2a-chart-card"

const Chart2a = () => (
  <Fragment>
    <p className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select one</p>
    <dl className="cmp-diagram-chart" style={{["--height"]: 30 + "rem", ["--scale"]: 2, ["--count"]: 6}}>
      <Chart2aCard percent="36" color="hotpink" label="In an external codebase and consumed via package manager"/>
      <Chart2aCard percent="24" color="blue" label="On a standalone documentation site where users primarily copy + paste, or download files"/>
      <Chart2aCard percent="16" color="orange" label="Included in the main codebase"/>
      <Chart2aCard percent="14" color="green" label="In an external codebase and consumed by the main codebase's build pipeline"/>
      <Chart2aCard percent="6" color="yellow" label="I am not sure"/>
      <Chart2aCard percent="4" color="white" label="Other"/>
    </dl>
  </Fragment>
)

export default Chart2a
