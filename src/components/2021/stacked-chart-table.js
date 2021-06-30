import React from "react"

const StackedChartTable = (props) => {
  let tableRows = []
  
  // Creates single table cell values
  let cellIterator = (value) => {
    let results = []
    for (let i = 0; i < value.length; i++) {
      if (value[i] > 0) {
        let result = value[i]
        if (result) {
          results.push (
            <td>
              {result}%
            </td>
          );
        }
      }
    }

    return (
      <>{results}</>
    )
  }

  // Defines the contents of `<tbody>`
  for (let i = 0; i < props.dataPoints.length; i++) {
    tableRows.push(
      <tr>
        <th>
          <span dangerouslySetInnerHTML={{__html:props.dataPoints[i][0]}} />
        </th>
        {cellIterator(props.dataPoints[i][1])}
      </tr>
    )
  }
  
  // Defines the contents of `<thead>`
  let tableHead = () => {
    let results = []

    if (props.keyMap) {
      for (let i = 0; i < props.keyMap.length; i++) {
        results.push(
          <th>
            <span dangerouslySetInnerHTML={{__html:props.keyMap[i]}} />
          </th>
        );
      }

      return (
        <thead>
          <tr>
            <th>&nbsp;</th>
            {results}
          </tr>
        </thead>
      )
    }
  }

  return (
    <table className="util-visually-hidden">
      <caption>{props.title}</caption>
      {tableHead()}
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default StackedChartTable
