import React, { Component, createRef } from "react"
import ChartCard from "./diagram-chart-card"
import observe from "../../js/2019/chart-animation"

class Diagram3c extends Component {
  constructor(props) {
    super(props);
    this.platform = createRef();
  }

  componentDidMount() {
    const diagramObserver = () => {
      observe(this.platform, 'cmp-diagram-chart__list--animated');
    }

    requestAnimationFrame(diagramObserver);  }

  render() {
    return (
      <div className="cmp-diagram">
        <p id="table3c" className="font-diagram-heading">Q: If you feel that your organization’s design system was not successful, what were the primary reasons?</p>
        <p className="font-diagram-copy">71 In-House Responses <br /> <em>Respondents were asked to select all that&nbsp;apply</em></p>
        <div className="cmp-diagram__table cmp-diagram__table--vertical" tabIndex="0">
          <table aria-labelledby="table3c">
          <tbody>
              <tr>
                <th className="util-align-left">Adoption difficulties</th>
                <td className="util-align-right">52%</td>
              </tr>
              <tr>
              <th className="util-align-left">Maintenance difficulties</th>
                <td className="util-align-right">42%</td>
              </tr>
              <tr>
                <th className="util-align-left">Staffing difficulties</th>
                <td className="util-align-right">38%</td>
              </tr>
              <tr>
                <th className="util-align-left">Lack of an executive champion</th>
                <td className="util-align-right">35%</td>
              </tr>
              <tr>
                <th className="util-align-left">Funding difficulties</th>
                <td className="util-align-right">15%</td>
              </tr>
              <tr>
                <th className="util-align-left">Other</th>
                <td className="util-align-right">15%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cmp-diagram__chart cmp-diagram__chart--vertical cmp-diagram-chart" aria-hidden="true">
          <dl className="obj-layout-grid-column-6 cmp-diagram-chart__list">
            <ChartCard percent="52" color="hotpink" scale="1.25" label="Adoption difficulties"/>
            <ChartCard percent="42" color="blue" scale="1.25" label="Maintenance difficulties"/>
            <ChartCard percent="38" color="orange" scale="1.25" label="Staffing difficulties"/>
            <ChartCard percent="35" color="green" scale="1.25" label="Lack of an executive champion"/>
            <ChartCard percent="15" color="yellow" scale="1.25" label="Funding difficulties"/>
            <ChartCard percent="15" color="white" scale="1.25" label="Other"/>
          </dl>
          <div ref={this.platform} className="cmp-diagram-chart__platform" />
        </div>
      </div>
    )
  }
}

export default Diagram3c
