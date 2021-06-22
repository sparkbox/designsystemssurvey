import React from "react"
import PropTypes from "prop-types"

const StackedChart = (props) => {
  let dataBars = []
  let keysMap = []
  let keyStyle
  let headingStyle

  // Chart Key
  for (let i = 0; i < props.keyMap.length; i++) {
    keyStyle = i + 1
    keysMap.push(
      <div className="cmp-stacked-chart__key">
        <span className={`cmp-stacked-chart__key-marker util-fill-style-${keyStyle}`} />
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
        keyStyle = i + 1
        let cssProperties = {}
        cssProperties['--width'] = `${value[i]}%`
  
        results.push (
          <div className={`util-fill-style-${keyStyle} cmp-stacked-chart__item`} style={cssProperties}>
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
  
  if (props.style === 'small') {
    headingStyle = 'cmp-type-h3';
  }
  else if (props.style === 'large') {
    headingStyle = 'cmp-type-h2';
  }

  return (
    <div className={`cmp-stacked-chart cmp-stacked-chart--${props.style}`}>
      <h2 className={headingStyle}>{props.title}</h2>
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

StackedChart.defaultProps = {
  style: 'large'
}

StackedChart.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired,
  keyMap: PropTypes.array.isRequired
}

export default StackedChart
