import React from "react"

const PieChart = () => {
  let cssProperties = {}
  cssProperties['--object-1'] = 65
  cssProperties['--object-2'] = 24
  cssProperties['--object-3'] = 12
  return (
    <div className="cmp-pie-chart" style={cssProperties}>
      <div className="cmp-pie-chart__diagram" aria-hidden={true}>
        <div className="cmp-pie-chart__divider cmp-pie-chart__divider--object-1" />
        <div className="cmp-pie-chart__divider cmp-pie-chart__divider--object-2" />
        <div className="cmp-pie-chart__divider cmp-pie-chart__divider--object-3" />
        <div className="cmp-pie-chart__piece cmp-pie-chart__piece--object-1" />
        <div className="cmp-pie-chart__piece cmp-pie-chart__piece--object-2" />
        <div className="cmp-pie-chart__piece cmp-pie-chart__piece--object-3" />
      </div>
      <div className="cmp-pie-chart__keys">
        <div className="cmp-pie-chart__key cmp-pie-chart__key--item-1">
          <span className="cmp-pie-chart__key-title">Agree or Strongly Agree</span>
          <span className="cmp-pie-chart__key-value">65%</span>
        </div>
        <div className="cmp-pie-chart__key cmp-pie-chart__key--item-2">
          <span className="cmp-pie-chart__key-title">Neither Agree nor Disagree</span>
          <span className="cmp-pie-chart__key-value">24%</span>
        </div>
        <div className="cmp-pie-chart__key cmp-pie-chart__key--item-3">
          <span className="cmp-pie-chart__key-title">Disagree or Strongly Disagree</span>
          <span className="cmp-pie-chart__key-value">12%</span>
        </div>
      </div>
      <table className="util-visually-hidden">
        <tbody>
          <tr>
            <th>Agree or Strongly Agree</th>
            <td>65%</td>
          </tr>
          <tr>
            <th>Neither Agree nor Disagree</th>
            <td>24%</td>
          </tr>
          <tr>
            <th>Disagree or Strongly Disagree</th>
            <td>12%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PieChart