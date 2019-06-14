import React from "react"

const Table4b = () => (
  <section className="cmp-diagram-table">
    <p id="table4b" className="font-diagram-heading">Q: How much of your website(s) or application(s) is sourced from your design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select One</p>
    <div className="cmp-diagram-table__scrollable">
      <table aria-labelledby="table4b">
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
            <td className="util-align-center">100%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Unsuccessful</th>
            <td className="util-align-center">85%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">8%</td>
            <td className="util-align-center">8%</td>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Average</th>
            <td className="util-align-center">51%</td>
            <td className="util-align-center">17%</td>
            <td className="util-align-center">10%</td>
            <td className="util-align-center">7%</td>
            <td className="util-align-center">15%</td>
            <td className="util-align-center">0%</td>
          </tr>
          <tr>
            <th className="util-align-left">Successful</th>
            <td className="util-align-center">30%</td>
            <td className="util-align-center">27%</td>
            <td className="util-align-center">24%</td>
            <td className="util-align-center">8%</td>
            <td className="util-align-center">5%</td>
            <td className="util-align-center">5%</td>
          </tr>
          <tr>
            <th className="util-align-left">Very Successful</th>
            <td className="util-align-center">19%</td>
            <td className="util-align-center">6%</td>
            <td className="util-align-center">50%</td>
            <td className="util-align-center">13%</td>
            <td className="util-align-center">13%</td>
            <td className="util-align-center">0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table4b
