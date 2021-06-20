import React from "react"
import PropTypes from "prop-types"

const BarChart = (props) => {
  let dataBars = []
  let keysMap = []
  let style
  
  // Chart Key
  for (let i = 0; i < props.keyMap.length; i++) {
    style = (i == 0) ? 6 : i
    keysMap.push(
      <div className="cmp-bar-chart__key">
        <span className={`cmp-bar-chart__key-marker util-fill-style-${style}`} />
        <span className="cmp-bar-chart__key-name">
          {props.keyMap[i]}
        </span>
      </div>
    );
  }
  
  // Single Bar
  let barIterator = (...value) => {
    let results = []
    let style

    for (let i = 0; i < (value.length + 1); i++) {
      style = (i == 0) ? 6 : i
      let result = value[0][i]
      let cssProperties = {}
      cssProperties['--width'] = `${result}%`

      results.push (
        <div className={`util-fill-style-${style} cmp-bar-chart__item`} style={cssProperties}>
          <div className="cmp-bar-chart__value">{result}%</div>
        </div>
      );
    }
    return (
      <>{results}</>
    )
  }
  
  for (let i = 0; i < props.dataPoints.length; i++) {
    dataBars.push(
      <div className="cmp-bar-chart__set">
        <div className="cmp-bar-chart__set-name">
          {props.dataPoints[i][0]}
        </div>
        {barIterator(props.dataPoints[i][1])}
      </div>
    );
  }

  return (
    <div className="cmp-bar-chart">
      <h2 className="cmp-type-h3">{props.title}</h2>
      {props.children}
      <div className="cmp-bar-chart__keys">
        {keysMap}
      </div>
      <div className="cmp-bar-chart__diagram">
        {dataBars}
      </div>
    </div>
  )
}

BarChart.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired,
  keyMap: PropTypes.array.isRequired
}

export default BarChart