import React from "react"

const HorizontalTable = () => (
  <table>
    <thead>
      <tr>
        <th>In an external codebase and consumed via package manager</th>
        <th>On a standalone documentation site where users primarily copy + paste, or download files</th>
        <th>Included in the main codebase</th>
        <th>In an external codebase and consumed by the main codebase's build pipeline</th>
        <th>I am not sure</th>
        <th>Other</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>36%</td>
        <td>24%</td>
        <td>16%</td>
        <td>14%</td>
        <td>6%</td>
        <td>4%</td>
      </tr>
    </tbody>
  </table>
)

export default HorizontalTable
