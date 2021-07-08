import React from "react"
import PropTypes from "prop-types"

const PieChart = (props) => {
  const Tag = props.headingLevel
  let cssProperties = {}
  let key = []
  let slices = []


  for (let i = 0; i < props.dataPoints.length; i++) {
    cssProperties[`--object-${i + 1}`] = props.dataPoints[i][1];

    key.push(
      <tr className="cmp-pie-chart__key">
        <th className="cmp-pie-chart__key-name">
          <span className={`cmp-pie-chart__key-marker util-fill-style-${i + 1}`} />
          {props.dataPoints[i][0]}
        </th>
        <td className="cmp-pie-chart__key-value">{props.dataPoints[i][1]}%</td>
      </tr>
    );
    slices.push(
      <div className={`cmp-pie-chart__slice cmp-pie-chart__slice--object-${i + 1} util-fill-style-${i + 1}`} />
    );
  }

  cssProperties['--total'] = 'calc(var(--object-1) + var(--object-2) + var(--object-3) + var(--object-4) + var(--object-5))'
  cssProperties['--turn-1'] = 'calc((var(--object-1) / var(--total)) * 360deg)'
  cssProperties['--turn-2'] = 'calc(((var(--object-2) / var(--total)) * 360deg) + var(--turn-1))'
  cssProperties['--turn-3'] = 'calc(((var(--object-3) / var(--total)) * 360deg) + var(--turn-2))'
  cssProperties['--turn-4'] = 'calc(((var(--object-4) / var(--total)) * 360deg) + var(--turn-3))'
  cssProperties['--turn-5'] = 'calc(((var(--object-5) / var(--total)) * 360deg) + var(--turn-4))'

  return (
    <div className={`cmp-pie-chart cmp-pie-chart--${props.styleFormat}`}>
      <div className="cmp-pie-chart__keys-container">
        <Tag aria-hidden="true" className="cmp-type-h3 cmp-pie-chart__title">{props.title}</Tag>
        {props.children}
        <table className="cmp-pie-chart__keys">
          <caption className="util-visually-hidden">{props.title}</caption>
          {key}
        </table>
      </div>
      <div className="cmp-pie-chart__diagram-container">
        <div className="cmp-pie-chart__diagram" aria-hidden="true" style={cssProperties}>
          {slices}
        </div>
      </div>
    </div>
  );
}

PieChart.defaultProps = {
  styleFormat: 'large',
  headingLevel: 'h2'
}

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired
}

export default PieChart
