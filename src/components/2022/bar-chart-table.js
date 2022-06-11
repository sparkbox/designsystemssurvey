import React from "react"

const BarChartTable = (props) => {
  let tableRows = []

  // Defines the contents of `<tbody>`
  for (let i = 0; i < props.dataPoints.length; i++) {
    tableRows.push(
      <tr key={i}>
        <th>
          {props.dataPoints[i][0]}
        </th>
        <td>
          {`${props.dataPoints[i][1]}%`}
        </td>
      </tr>
    )
  }

  return (
    <table className="util-visually-hidden">
      <caption>{props.title}</caption>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default BarChartTable
