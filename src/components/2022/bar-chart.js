import React from "react"
import PropTypes from "prop-types"
import BarChartTable from "./bar-chart-table"
import Grid from "../../components/2022/grid"
import GridCell from "../../components/2022/grid-cell"

const BarChart = (props) => {
  let dataBars = []

  for (let i = 0; i < props.dataPoints.length; i++) {
    let title = props.dataPoints[i][0]
    let value = props.dataPoints[i][1]
    let cssProperties = {}
    cssProperties['--width'] = `${value}%`

    dataBars.push(
      <div className="cmp-bar-chart" key={i} style={cssProperties}>
        <div className="cmp-bar-chart__title">
          {title}
        </div>
        <div className="cmp-bar-chart__value">
          {value}%
        </div>
      </div>
    );
  }

  return (
    <>
      <div aria-hidden="true">
        <Grid>
          <GridCell spanMD={7} spanLG={9}>
            <h3>{props.title}</h3>
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
