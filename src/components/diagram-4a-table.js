import React, { Fragment } from "react"

const Table4a = () => (
  <section class="cmp-diagram-table">
    <p id="table4a" className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select one</p>
    <div className="cmp-diagram-table__scrollable">
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>On a standalone documentation site where users primarily copy and paste</th>
            <th>In an external codebase and consumed by the main codebase's build pipeline</th>
            <th>In an external codebase and consumed via package</th>
            <th>Included in the main codebase</th>
            <th>I am not sure</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="util-align-left">Very Unsuccessful</th>
            <td>0%</td>
            <td>0%</td>
            <td>100%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Unsuccessful</th>
            <td>62%</td>
            <td>0%</td>
            <td>15%</td>
            <td>15%</td>
            <td>8%</td>
            <td>0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Average</th>
            <td>27%</td>
            <td>17%</td>
            <td>24%</td>
            <td>17%</td>
            <td>10%</td>
            <td>5%</td>
          </tr>
          <tr>
            <th className="util-align-left">Successful</th>
            <td>16%</td>
            <td>14%</td>
            <td>43%</td>
            <td>19%</td>
            <td>3%</td>
            <td>5%</td>
          </tr>
          <tr>
            <th className="util-align-left">Very Successful</th>
            <td>6%</td>
            <td>19%</td>
            <td>63%</td>
            <td>6%</td>
            <td>6%</td>
            <td>0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table4a
