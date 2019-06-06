import React, { Fragment } from "react"

const Table4a = () => (
  <section class="cmp-diagram-table">
    <p id="table4a" className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select one</p>
    <div className="cmp-diagram-table__scrollable">
      <table aria-labelledby="table4a">
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
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">100%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Unsuccessful</th>
            <td className="util-align-center">62%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">15%</td>
            <td className="util-align-center">15%</td>
            <td className="util-align-center">8%</td>
            <td className="util-align-center">0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Average</th>
            <td className="util-align-center">27%</td>
            <td className="util-align-center">17%</td>
            <td className="util-align-center">24%</td>
            <td className="util-align-center">17%</td>
            <td className="util-align-center">10%</td>
            <td className="util-align-center">5%</td>
          </tr>
          <tr>
            <th className="util-align-left">Successful</th>
            <td className="util-align-center">16%</td>
            <td className="util-align-center">14%</td>
            <td className="util-align-center">43%</td>
            <td className="util-align-center">19%</td>
            <td className="util-align-center">3%</td>
            <td className="util-align-center">5%</td>
          </tr>
          <tr>
            <th className="util-align-left">Very Successful</th>
            <td className="util-align-center">6%</td>
            <td className="util-align-center">19%</td>
            <td className="util-align-center">63%</td>
            <td className="util-align-center">6%</td>
            <td className="util-align-center">6%</td>
            <td className="util-align-center">0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table4a
