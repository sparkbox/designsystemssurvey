import React from "react"

const Table2a = () => (
  <section className="cmp-diagram">
    <p id="table2a" className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select one</p>
    <div className="cmp-diagram__table">
      <table aria-labelledby="table2a">
        <tbody>
          <tr>
            <th className="util-align-left">In an external codebase and consumed via package manager</th>
            <td className="util-align-right">36%</td>
          </tr>
          <tr>
          <th className="util-align-left">On a standalone documentation site where users primarily copy + paste, or download files</th>
            <td className="util-align-right">24%</td>
          </tr>
          <tr>
            <th className="util-align-left">Included in the main codebase</th>
            <td className="util-align-right">16%</td>
          </tr>
          <tr>
            <th className="util-align-left">In an external codebase and consumed by the main codebase's build pipeline</th>
            <td className="util-align-right">14%</td>
          </tr>
          <tr>
            <th className="util-align-left">I am not sure</th>
            <td className="util-align-right">6%</td>
          </tr>
          <tr>
            <th className="util-align-left">Other</th>
            <td className="util-align-right">4%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table2a
