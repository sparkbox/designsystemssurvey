import React from "react"
import PropTypes from "prop-types"
import BarChartTable from "./bar-chart-table"

const BarChart = (props) => {
  const Tag = props.headingLevel
  let dataBars = []
  let keysMap = []
  let keyStyle
  let fillStart = 1

  if (props.startStyle === 'alt') {
    fillStart = 6
  }

  // Chart Key
  if (props.keyMap) {
    for (let i = 0; i < props.keyMap.length; i++) {
      keyStyle = (i === 0) ? fillStart : (i + 1)
      keysMap.push(
        <div className="cmp-bar-chart__key" key={i}>
          <span className={`cmp-bar-chart__key-marker util-fill-style-${keyStyle}`} />
          <span className="cmp-bar-chart__key-name"  dangerouslySetInnerHTML={{__html:props.keyMap[i]}} />
        </div>
      );
    }
  }

  // Single Bar
  let barIterator = (...value) => {
    let results = []
    let keyStyle

    for (let i = 0; i < (value.length + 1); i++) {
      keyStyle = (i === 0) ? fillStart : (i + 1)
      let result = value[0][i]
      let cssProperties = {}
      cssProperties['--width'] = `${result}%`
      let valueAbove = (result < 7) ?  <div className="cmp-bar-chart__value">{result}%</div> : ""
      let hideValue = (result < 7) ? " cmp-bar-chart__value--hidden" : ""

      if (result) {
        results.push (
          <div key={i}>
            {valueAbove}
            <div className={`util-fill-style-${keyStyle} cmp-bar-chart__item`} style={cssProperties}>
              <div className={`cmp-bar-chart__value ${hideValue}`}>{result}%</div>
            </div>
          </div>
        );
      }
    }
    return (
      <>{results}</>
    )
  }
  for (let i = 0; i < props.dataPoints.length; i++) {
    dataBars.push(
      <div className="cmp-bar-chart__set" key={i}>
        <div className="cmp-bar-chart__set-name">
          {props.dataPoints[i][0]}
        </div>
        {barIterator(props.dataPoints[i][1])}
      </div>
    );
  }

  return (
    <>
      <div className={`cmp-bar-chart cmp-bar-chart--${props.styleFormat}`}>
        <Tag aria-hidden="true" className="cmp-type-h3">{props.title}</Tag>
        {props.children}
        <div aria-hidden="true" className="cmp-bar-chart__keys">
          {keysMap}
        </div>
        <div aria-hidden="true" className="cmp-bar-chart__diagram">
          {dataBars}
        </div>
      </div>
      <BarChartTable { ...props } />
    </>
  )
}

BarChart.defaultProps = {
  styleFormat: 'large',
  headingLevel: 'h2',
  startStyle: 'normal'
}

BarChart.propTypes = {
  title: PropTypes.node.isRequired,
  dataPoints: PropTypes.array.isRequired,
  keyMap: PropTypes.array
}

export default BarChart
