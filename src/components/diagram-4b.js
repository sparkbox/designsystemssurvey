import React from "react"
import TableKey from "./diagram-table-key"
import TableBlock from "./diagram-table-block"
import TableColumn from "./diagram-table-column"

const Diagram4b = () => (
  <section className="cmp-diagram">
    <p id="table4b" className="font-diagram-heading">Q: How much of your website(s) or application(s) is sourced from your design system?</p>
    <p className="font-diagram-copy">108 In-House Responses <span aria-hidden="true">|</span> Respondents were asked to select one&nbsp;answer</p>
    <div className="cmp-diagram__table" tabIndex="0">
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

    <div className="cmp-row-chart cmp-diagram__chart" aria-hidden="true">
      <div className="cmp-row-chart__secondary">
        <h5 className="util-visually-hidden">Chart Key</h5>
        <ul className="cmp-key">
          <TableKey color="hotpink" text="Less than 50% is for the design system" />
          <TableKey color="yellow" text="50% to 74% is from the design system" />
          <TableKey color="blue" text="More than 75% is from the design system" />
          <TableKey color="green" text="Everything is from the design system" />
          <TableKey color="orange" text="I am not sure" />
          <TableKey color="white" text="I prefer not to say" />
        </ul>
      </div>

      <div className="cmp-row-chart__primary">
        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Very Unsuccessful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="100" color="hotpink"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Unsuccessful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="85" color="hotpink"/>
            <TableBlock percent="8" color="blue"/>
            <TableBlock percent="8" color="green"/>
            <TableBlock percent="8" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Average</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="51" color="hotpink"/>
            <TableBlock percent="17" color="yellow"/>
            <TableBlock percent="10" color="blue"/>
            <TableBlock percent="7" color="green"/>
            <TableBlock percent="15" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Successful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="30" color="hotpink"/>
            <TableBlock percent="27" color="yellow"/>
            <TableBlock percent="24" color="blue"/>
            <TableBlock percent="8" color="green"/>
            <TableBlock percent="5" color="orange"/>
            <TableBlock percent="5" color="white"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Very Successful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="19" color="hotpink"/>
            <TableBlock percent="6" color="yellow"/>
            <TableBlock percent="50" color="blue"/>
            <TableBlock percent="13" color="green"/>
            <TableBlock percent="13" color="orange"/>
          </ul>
        </div>

        <ul className="cmp-row-chart__column-container" aria-hidden="true">
          <TableColumn percent="0" />
          <TableColumn percent="25" />
          <TableColumn percent="50" />
          <TableColumn percent="75" />
          <TableColumn percent="100" />
        </ul>
      </div>
    </div>
  </section>
)

export default Diagram4b
