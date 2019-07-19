import React, { Component, createRef } from "react"
import ChartCard from "./diagram-chart-card"
import observe from "../js/chart-animation"

class Diagram3b extends Component {
  constructor(props) {
    super(props);
    this.platform = createRef();
  }

  componentDidMount() {
    observe(this.platform, 'cmp-diagram-chart__list--animated');
  }

  render() {
    return (
      <div className="cmp-diagram">
        <p id="table3b" className="font-diagram-heading">Q: What about a client engagement leads you to suggest or not suggest a design system?</p>
        <p className="font-diagram-copy">79 Agency Responses <br /> <em>Respondents were asked to select all that&nbsp;apply</em></p>
        <div className="cmp-diagram__table cmp-diagram__table--vertical" tabIndex="0">
          <table aria-labelledby="table3b">
          <tbody>
              <tr>
                <th className="util-align-left">The client struggles with consistency across web properties</th>
                <td className="util-align-right">58%</td>
              </tr>
              <tr>
              <th className="util-align-left">The client has many web properties that could all benefit from a unified system</th>
                <td className="util-align-right">57%</td>
              </tr>
              <tr>
                <th className="util-align-left">The client needs a more efficient way to work</th>
                <td className="util-align-right">52%</td>
              </tr>
              <tr>
                <th className="util-align-left">The client has many contributors to their web properties</th>
                <td className="util-align-right">38%</td>
              </tr>
              <tr>
                <th className="util-align-left">The client needs “out of the box” solutions to fill UX/UI developer gaps</th>
                <td className="util-align-right">33%</td>
              </tr>
              <tr>
                <th className="util-align-left">We always suggest a design system</th>
                <td className="util-align-right">30%</td>
              </tr>
              <tr>
                <th className="util-align-left">We never suggest a design system</th>
                <td className="util-align-right">8%</td>
              </tr>
              <tr>
                <th className="util-align-left">Other (please specify)</th>
                <td className="util-align-right">8%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-diagram__chart cmp-diagram__chart--vertical cmp-diagram-chart">
          <dl className="obj-layout-grid-column-8 cmp-diagram-chart__list">
            <ChartCard percent="58" color="hotpink" scale="1.25" label="The client struggles with consistency across web properties"/>
            <ChartCard percent="57" color="blue" scale="1.25" label="The client has many web properties that could all benefit from a unified system"/>
            <ChartCard percent="52" color="orange" scale="1.25" label="The client needs a more efficient way to work"/>
            <ChartCard percent="38" color="green" scale="1.25" label="The client has many contributors to their web properties"/>
            <ChartCard percent="33" color="yellow" scale="1.25" label="The client needs “out of the box” solutions to fill UX/UI developer gaps"/>
            <ChartCard percent="30" color="white" scale="1.25" label="We always suggest a design system"/>
            <ChartCard percent="8" color="bluegreen" scale="1.25" label="We never suggest a design system"/>
            <ChartCard percent="8" color="yellowpink" scale="1.25" label="Other (please specify)"/>
          </dl>
          <div ref={this.platform} className="cmp-diagram-chart__platform" />
        </div>
      </div>
    )
  }
}

export default Diagram3b
