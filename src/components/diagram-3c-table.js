import React from "react"

const Table3c = () => (
  <section className="cmp-diagram-table">
    <p id="table3c" className="font-diagram-heading">Q: If you feel that your organization’s design system was not successful, what were the primary reasons?</p>
    <p className="font-diagram-copy">71 In-House Responses | Select all that apply</p>
    <div className="cmp-diagram-table__scrollable">
      <table aria-labelledby="table3c">
      <tbody>
          <tr>
            <th className="util-align-left">Adoption difficulties</th>
            <td className="util-align-right">52%</td>
          </tr>
          <tr>
          <th className="util-align-left">Maintenance difficulties</th>
            <td className="util-align-right">42%</td>
          </tr>
          <tr>
            <th className="util-align-left">Staffing difficulties</th>
            <td className="util-align-right">38%</td>
          </tr>
          <tr>
            <th className="util-align-left">Lack of an executive champion</th>
            <td className="util-align-right">35%</td>
          </tr>
          <tr>
            <th className="util-align-left">Funding difficulties</th>
            <td className="util-align-right">15%</td>
          </tr>
          <tr>
            <th className="util-align-left">Other</th>
            <td className="util-align-right">15%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table3c