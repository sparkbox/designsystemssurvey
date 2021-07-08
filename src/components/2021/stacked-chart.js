import React from "react"
import PropTypes from "prop-types"
import StackedChartTable from "./stacked-chart-table"

const StackedChart = (props) => {
  const Tag = props.headingLevel
  let dataBars = []
  let keysMap = []
  let keyStyle

  // Chart Key
  for (let i = 0; i < props.keyMap.length; i++) {
    keyStyle = i + 1
    keysMap.push(
      <div className="cmp-stacked-chart__key">
        <span className={`cmp-stacked-chart__key-marker util-fill-style-${keyStyle}`} />
        <span className="cmp-stacked-chart__key-name"  dangerouslySetInnerHTML={{__html:props.keyMap[i]}} />
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
        let inside = (value[i] > 7) ? " cmp-stacked-chart__value--inside" : "";

        results.push (
          <div class="cmp-stacked-chart__item" style={cssProperties}>
            <div className={`util-fill-style-${keyStyle} cmp-stacked-chart__bar`}/>
            <div className={`cmp-stacked-chart__value${inside}`}>{value[i]}%</div>
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
    <>
      <div className={`cmp-stacked-chart cmp-stacked-chart--${props.styleFormat}`}>
        <Tag aria-hidden="true" className="cmp-type-h3">{props.title}</Tag>
        {props.children}
        <div aria-hidden="true" className="cmp-stacked-chart__keys">
          {keysMap}
        </div>
        <div aria-hidden="true" className="cmp-stacked-chart__diagram">
          {dataBars}
        </div>
      </div>

      <StackedChartTable { ...props } />
    </>
  )
}

StackedChart.defaultProps = {
  styleFormat: 'large',
  headingLevel: 'h2'
}

StackedChart.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired,
  keyMap: PropTypes.array.isRequired
}

export default StackedChart
