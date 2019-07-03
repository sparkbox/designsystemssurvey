import React, { Component, createRef } from "react"
import TableKey from "./diagram-table-key"
import TableBlock from "./diagram-table-block"
import TableColumn from "./diagram-table-column"

const Diagram4a = () => (
  <section className="cmp-diagram">
    <p id="table4a" className="font-diagram-heading">Q: How is your design system delivered to the consumers of the design system?</p>
    <p className="font-diagram-copy">108 In-House Responses | Select one</p>

    <div className="cmp-diagram__table" tabIndex="0">
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

    <div className="cmp-row-chart cmp-diagram__chart" aria-hidden="true">
      <div className="cmp-row-chart__secondary">
        <h5 className="util-visually-hidden">Chart Key</h5>
        <ul className="cmp-key">
          <TableKey color="hotpink" text="On a standalone documentation site where users primarily copy + paste" />
          <TableKey color="yellow" text="In a external codebase and consumed by the main codebase’s build pipeline" />
          <TableKey color="blue" text="In an external codebase and consumed via package" />
          <TableKey color="green" text="Included in the main codebase" />
          <TableKey color="orange" text="I am not sure" />
          <TableKey color="white" text="Other" />
        </ul>
      </div>

      <div className="cmp-row-chart__primary">
        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Very Unsuccessful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="100" color="blue"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Unsuccessful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="62" color="hotpink"/>
            <TableBlock percent="15" color="blue"/>
            <TableBlock percent="15" color="green"/>
            <TableBlock percent="8" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Average</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="27" color="hotpink"/>
            <TableBlock percent="17" color="yellow"/>
            <TableBlock percent="24" color="blue"/>
            <TableBlock percent="17" color="green"/>
            <TableBlock percent="10" color="orange"/>
            <TableBlock percent="5" color="white"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Successful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="16" color="hotpink"/>
            <TableBlock percent="14" color="yellow"/>
            <TableBlock percent="43" color="blue"/>
            <TableBlock percent="19" color="green"/>
            <TableBlock percent="3" color="orange"/>
            <TableBlock percent="5" color="white"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Very Successful</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="6" color="hotpink"/>
            <TableBlock percent="19" color="yellow"/>
            <TableBlock percent="63" color="blue"/>
            <TableBlock percent="6" color="green"/>
            <TableBlock percent="6" color="orange"/>
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

export default Diagram4a
