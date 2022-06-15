import React from "react"
import PropTypes from "prop-types"
import BarChartTable from "./bar-chart-table"
import Grid from "./grid"
import GridCell from "./grid-cell"
import Animate from "./animate"

const BarChart = (props) => {
  let dataBars = []

  for (let i = 0; i < props.dataPoints.length; i++) {
    let title = props.dataPoints[i][0]
    let value = props.dataPoints[i][1]
    let cssProperties = {}
    cssProperties['--width'] = `${value}%`

    dataBars.push(
      <div className="cmp-bar-chart" key={i} style={cssProperties}>
        <Animate type="slide-right">
          <div className="cmp-bar-chart__title" aria-hidden="true">
            {title}
          </div>
          <div className="cmp-bar-chart__value" aria-hidden="true">
            {value}%
          </div>
        </Animate>
      </div>
    );
  }

  return (
    <>
      <div aria-hidden="true">
        <Grid>
          <GridCell spanMD={7} spanLG={8}>
            <h3 className="cmp-type-heading-3 util-margin-top-none util-margin-btm-1xl">{props.title}</h3>
          </GridCell>
        </Grid>
        {dataBars}
      </div>
      <BarChartTable { ...props } />
    </>
  )
}

BarChart.propTypes = {
  title: PropTypes.node.isRequired,
  dataPoints: PropTypes.array.isRequired,
}

export default BarChart
