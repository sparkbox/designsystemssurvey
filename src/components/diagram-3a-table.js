import React, { Fragment } from "react"

const Table3a = () => (
  <section class="cmp-diagram-table">
    <p id="table3a" className="font-diagram-heading">Q: How strongly did each of the following factors motivate your organization to establish a design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Rate 1 to 5 where 1 = Not a motivator and 5 = A strong motivator</p>
    <div className="cmp-diagram-table__scrollable">
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="util-align-left">Code reusability</th>
            <td>5%</td>
            <td>3%</td>
            <td>9%</td>
            <td>16%</td>
            <td>67%</td>
          </tr>
          <tr>
            <th className="util-align-left">Increased efficiency in design</th>
            <td>1%</td>
            <td>3%</td>
            <td>13%</td>
            <td>21%</td>
            <td>63%</td>
          </tr>
          <tr>
            <th className="util-align-left">Increased efficiency in development</th>
            <td>2%</td>
            <td>2%</td>
            <td>10%</td>
            <td>25%</td>
            <td>61%</td>
          </tr>
          <tr>
            <th className="util-align-left">UX/UI consistency</th>
            <td>0%</td>
            <td>3%</td>
            <td>8%</td>
            <td>28%</td>
            <td>61%</td>
          </tr>
          <tr>
            <th className="util-align-left">Maintaining brand standards</th>
            <td>8%</td>
            <td>6%</td>
            <td>24%</td>
            <td>24%</td>
            <td>38%</td>
          </tr>
          <tr>
            <th className="util-align-left">Accessibility compliance</th>
            <td>16%</td>
            <td>13%</td>
            <td>23%</td>
            <td>22%</td>
            <td>25%</td>
          </tr>
          <tr>
            <th className="util-align-left">Rapid prototyping</th>
            <td>13%</td>
            <td>15%</td>
            <td>24%</td>
            <td>31%</td>
            <td>16%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default Table3a
