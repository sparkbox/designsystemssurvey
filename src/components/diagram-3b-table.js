import React, { Fragment } from "react"

const Table3b = () => (
  <section class="cmp-diagram-table">
    <p id="table3b" className="font-diagram-heading">Q: What about a client engagement leads you to suggest or not suggest a design system?</p>
    <p className="font-diagram-copy">79 Agency Responses | Select all that apply</p>
    <div className="cmp-diagram-table__scrollable">
      <table aria-labelledby="table3b">
      <tbody>
          <tr>
            <th className="util-align-left">The client struggles with consistency across web properties</th>
            <td className="util-align-right">58%</td>
          </tr>
          <tr>
          <th className="util-align-left">The client has many web properties that could all benefit from a unified system</th>
            <td className="util-align-right">57%</td>
          </tr>
          <tr>
            <th className="util-align-left">The client needs a more efficient way to work</th>
            <td className="util-align-right">52%</td>
          </tr>
          <tr>
            <th className="util-align-left">The client has many contributors to their web properties</th>
            <td className="util-align-right">38%</td>
          </tr>
          <tr>
            <th className="util-align-left">The client needs “out of the box” solutions to fill UX/UI developer gaps</th>
            <td className="util-align-right">33%</td>
          </tr>
          <tr>
            <th className="util-align-left">We always suggest a design system</th>
            <td className="util-align-right">30%</td>
          </tr>
          <tr>
            <th className="util-align-left">We never suggest a design system</th>
            <td className="util-align-right">8%</td>
          </tr>
          <tr>
            <th className="util-align-left">Other (please specify)</th>
            <td className="util-align-right">8%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table3b
