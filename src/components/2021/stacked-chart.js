import React from "react"
import PropTypes from "prop-types"

const StackedChart = (props) => {
  let dataBars = []
  let keysMap = []
  let style

  // Chart Key
  for (let i = 0; i < props.keyMap.length; i++) {
    style = i + 1
    keysMap.push(
      <div className="cmp-stacked-chart__key">
        <span className={`cmp-stacked-chart__key-marker util-fill-style-${style}`} />
        <span className="cmp-stacked-chart__key-name">
          {props.keyMap[i]}
        </span>
      </div>
    );
  }

  // Single Bar
  let barIterator = (value) => {
    let results = []

    for (let i = 0; i < value.length; i++) {
      if (value[i] > 0) {
        style = i + 1
        let cssProperties = {}
        cssProperties['--width'] = `${value[i]}%`
  
        results.push (
          <div className={`util-fill-style-${style} cmp-stacked-chart__item`} style={cssProperties}>
            <div className="cmp-stacked-chart__value">{value[i]}%</div>
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
      <div className="cmp-stacked-chart__set">
        <div className="cmp-stacked-chart__set-name">
          {props.dataPoints[i][0]}
        </div>
        <div className="cmp-stacked-chart__stack">
          {barIterator(props.dataPoints[i][1])}
        </div>
      </div>
    );
  }

  return (
    <div className="cmp-stacked-chart">
      <h2 className="cmp-type-h3">{props.title}</h2>
      {props.children}
      <div className="cmp-stacked-chart__keys">
        {keysMap}
      </div>
      <div className="cmp-stacked-chart__diagram">
        {dataBars}
      </div>
    </div>
  )
}

StackedChart.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired,
  keyMap: PropTypes.array.isRequired
}

export default StackedChart
