import React, { Component, createRef } from "react"
import Chart2aCard from "./diagram-2a-chart-card"
import observe from "../js/chart-animation"

class Chart2a extends Component {
  constructor(props) {
    super(props);
    // Property of the class
    this.platform = createRef();
  }

  componentDidMount() {
    observe(this.platform, 'cmp-diagram-chart__list--animated');
  }

  render() {
    return (
      <section className="cmp-diagram-chart">
        <p className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
        <p className="font-diagram-copy">108 In-House Responses | Select one</p>
        <dl className="cmp-diagram-chart__list">
          <Chart2aCard percent="36" color="hotpink" label="In an external codebase and consumed via package manager"/>
          <Chart2aCard percent="24" color="blue" label="On a standalone documentation site where users primarily copy + paste, or download files"/>
          <Chart2aCard percent="16" color="orange" label="Included in the main codebase"/>
          <Chart2aCard percent="14" color="green" label="In an external codebase and consumed by the main codebase's build pipeline"/>
          <Chart2aCard percent="6" color="yellow" label="I am not sure"/>
          <Chart2aCard percent="4" color="white" label="Other"/>
          <div ref={this.platform} className="cmp-diagram-chart__platform" />
        </dl>
      </section>
    )
  }
}

export default Chart2a
