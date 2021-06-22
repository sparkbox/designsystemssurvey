import React from "react"
import PropTypes from "prop-types"

const BarChart = (props) => {
  let dataBars = []
  let keysMap = []
  let keyStyle
  let headingStyle
  
  // Chart Key
  for (let i = 0; i < props.keyMap.length; i++) {
    keyStyle = (i === 0) ? 6 : i
    keysMap.push(
      <div className="cmp-bar-chart__key">
        <span className={`cmp-bar-chart__key-marker util-fill-style-${keyStyle}`} />
        <span className="cmp-bar-chart__key-name">
          {props.keyMap[i]}
        </span>
      </div>
    );
  }
  
  // Single Bar
  let barIterator = (...value) => {
    let results = []
    let keyStyle

    for (let i = 0; i < (value.length + 1); i++) {
      keyStyle = (i === 0) ? 6 : i
      let result = value[0][i]
      let cssProperties = {}
      cssProperties['--width'] = `${result}%`

      results.push (
        <div className={`util-fill-style-${keyStyle} cmp-bar-chart__item`} style={cssProperties}>
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
  
  if (props.style === 'small') {
    headingStyle = 'cmp-type-h3';
  }
  else if (props.style === 'large') {
    headingStyle = 'cmp-type-h2';
  }

  return (
    <div className={`cmp-bar-chart cmp-bar-chart--${props.style}`}>
      <h2 className={headingStyle}>{props.title}</h2>
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

BarChart.defaultProps = {
  style: 'large'
}

BarChart.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired,
  keyMap: PropTypes.array.isRequired
}

export default BarChart