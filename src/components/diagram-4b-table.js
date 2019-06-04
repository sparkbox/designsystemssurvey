import React, { Fragment } from "react"

const Table4b = () => (
  <section class="cmp-diagram-table">
    <p id="table4b" className="font-diagram-heading">Q: How much of your website(s) or application(s) is sourced from your design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select One</p>
    <div className="cmp-diagram-table__scrollable">
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Less than 50% is for the design system</th>
            <th>50% to 74% is from the design system</th>
            <th>More than 75% is from the design system</th>
            <th>Everything is from the design system</th>
            <th>I am not sure</th>
            <th>I prefer not to say</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="util-align-left">Very Unsuccessful</th>
            <td>100%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Unsuccessful</th>
            <td>85%</td>
            <td>0%</td>
            <td>8%</td>
            <td>8%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Average</th>
            <td>51%</td>
            <td>17%</td>
            <td>10%</td>
            <td>7%</td>
            <td>15%</td>
            <td>0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Successful</th>
            <td>30%</td>
            <td>27%</td>
            <td>24%</td>
            <td>8%</td>
            <td>5%</td>
            <td>5%</td>
          </tr>
          <tr>
            <th className="util-align-left">Very Successful</th>
            <td>19%</td>
            <td>6%</td>
            <td>50%</td>
            <td>13%</td>
            <td>13%</td>
            <td>0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table4b
