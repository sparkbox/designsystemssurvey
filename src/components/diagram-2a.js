import React, { Component, createRef } from "react"
import ChartCard from "./diagram-chart-card"
import observe from "../js/chart-animation"

class Diagram2a extends Component {
  constructor(props) {
    super(props);
    this.platform = createRef();
  }

  componentDidMount() {
    observe(this.platform, 'cmp-diagram-chart__list--animated');
  }

  render() {
    return (
      <section className="cmp-diagram">
        <p id="table2a" className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
        <p className="font-diagram-copy">108 In-House Responses <span aria-hidden="true">|</span> Respondents were asked to select one&nbsp;answer</p>
        <div className="cmp-diagram__table cmp-diagram__table--vertical" tabIndex="0">
          <table aria-labelledby="table2a">
            <tbody>
              <tr>
                <th className="util-align-left">In an external codebase and consumed via package manager</th>
                <td className="util-align-right">36%</td>
              </tr>
              <tr>
              <th className="util-align-left">On a standalone documentation site where users primarily copy + paste, or download files</th>
                <td className="util-align-right">24%</td>
              </tr>
              <tr>
                <th className="util-align-left">Included in the main codebase</th>
                <td className="util-align-right">16%</td>
              </tr>
              <tr>
                <th className="util-align-left">In an external codebase and consumed by the main codebase's build pipeline</th>
                <td className="util-align-right">14%</td>
              </tr>
              <tr>
                <th className="util-align-left">I am not sure</th>
                <td className="util-align-right">6%</td>
              </tr>
              <tr>
                <th className="util-align-left">Other</th>
                <td className="util-align-right">4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-diagram__chart cmp-diagram__chart--vertical cmp-diagram-chart">
          <dl className="obj-layout-grid-column-6 cmp-diagram-chart__list">
            <ChartCard percent="36" color="hotpink" scale="2" label="In an external codebase and consumed via package manager"/>
            <ChartCard percent="24" color="blue" scale="2" label="On a standalone documentation site where users primarily copy + paste, or download files"/>
            <ChartCard percent="16" color="orange" scale="2" label="Included in the main codebase"/>
            <ChartCard percent="14" color="green" scale="2" label="In an external codebase and consumed by the main codebase's build pipeline"/>
            <ChartCard percent="6" color="yellow" scale="2" label="I am not sure"/>
            <ChartCard percent="4" color="white" scale="2" label="Other"/>
          </dl>
          <div ref={this.platform} className="cmp-diagram-chart__platform" />
        </div>
      </section>
    )
  }
}

export default Diagram2a
