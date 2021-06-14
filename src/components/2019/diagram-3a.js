import React from "react"
import TableKey from "./diagram-table-key"
import TableBlock from "./diagram-table-block"
import TableColumn from "./diagram-table-column"

const Diagram3a = () => (
  <div className="cmp-diagram">
    <p id="table3a" className="font-diagram-heading">Q: How strongly did each of the following factors motivate your organization to establish a design system?</p>
    <p className="font-diagram-copy">108 In-House Responses <br /> <em>Respondents were asked to rate on a 1&nbsp;to&nbsp;5 scale where 1&nbsp;=&nbsp;Not a motivator and 5&nbsp;=&nbsp;A strong&nbsp;motivator</em></p>
    <div className="cmp-diagram__table">
      <table aria-labelledby="table3a">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th aria-label="not a motivator">1</th>
            <th aria-label="a low motivator">2</th>
            <th aria-label="neutral">3</th>
            <th aria-label="a moderate motivator">4</th>
            <th aria-label="a strong motivator">5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="util-align-left">Code reusability</th>
            <td className="util-align-center">5%</td>
            <td className="util-align-center">3%</td>
            <td className="util-align-center">9%</td>
            <td className="util-align-center">16%</td>
            <td className="util-align-center">67%</td>
          </tr>
          <tr>
            <th className="util-align-left">Increased efficiency in design</th>
            <td className="util-align-center">1%</td>
            <td className="util-align-center">3%</td>
            <td className="util-align-center">13%</td>
            <td className="util-align-center">21%</td>
            <td className="util-align-center">63%</td>
          </tr>
          <tr>
            <th className="util-align-left">Increased efficiency in development</th>
            <td className="util-align-center">2%</td>
            <td className="util-align-center">2%</td>
            <td className="util-align-center">10%</td>
            <td className="util-align-center">25%</td>
            <td className="util-align-center">61%</td>
          </tr>
          <tr>
            <th className="util-align-left">UX/UI consistency</th>
            <td className="util-align-center">0%</td>
            <td className="util-align-center">3%</td>
            <td className="util-align-center">8%</td>
            <td className="util-align-center">28%</td>
            <td className="util-align-center">61%</td>
          </tr>
          <tr>
            <th className="util-align-left">Maintaining brand standards</th>
            <td className="util-align-center">8%</td>
            <td className="util-align-center">6%</td>
            <td className="util-align-center">24%</td>
            <td className="util-align-center">24%</td>
            <td className="util-align-center">38%</td>
          </tr>
          <tr>
            <th className="util-align-left">Accessibility compliance</th>
            <td className="util-align-center">16%</td>
            <td className="util-align-center">13%</td>
            <td className="util-align-center">23%</td>
            <td className="util-align-center">22%</td>
            <td className="util-align-center">25%</td>
          </tr>
          <tr>
            <th className="util-align-left">Rapid prototyping</th>
            <td className="util-align-center">13%</td>
            <td className="util-align-center">15%</td>
            <td className="util-align-center">24%</td>
            <td className="util-align-center">31%</td>
            <td className="util-align-center">16%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cmp-row-chart cmp-diagram__chart" aria-hidden="true">
      <div className="cmp-row-chart__secondary">
        <h5 className="util-visually-hidden">Chart Key</h5>
        <ul className="cmp-key">
          <TableKey color="hotpink" text="1" />
          <TableKey color="yellow" text="2" />
          <TableKey color="blue" text="3" />
          <TableKey color="green" text="4" />
          <TableKey color="orange" text="5" />
        </ul>
      </div>

      <div className="cmp-row-chart__primary">
        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Code reusability</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="5" color="hotpink"/>
            <TableBlock percent="3" color="yellow"/>
            <TableBlock percent="9" color="blue"/>
            <TableBlock percent="16" color="green"/>
            <TableBlock percent="67" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Increased efficiency in design</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="1" color="hotpink"/>
            <TableBlock percent="3" color="yellow"/>
            <TableBlock percent="13" color="blue"/>
            <TableBlock percent="21" color="green"/>
            <TableBlock percent="63" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Increased efficiency in development</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="2" color="hotpink"/>
            <TableBlock percent="2" color="yellow"/>
            <TableBlock percent="10" color="blue"/>
            <TableBlock percent="25" color="green"/>
            <TableBlock percent="61" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">UX/UI consistency</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="3" color="yellow"/>
            <TableBlock percent="8" color="blue"/>
            <TableBlock percent="28" color="green"/>
            <TableBlock percent="61" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Maintaining brand standards</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="8" color="hotpink"/>
            <TableBlock percent="6" color="yellow"/>
            <TableBlock percent="24" color="blue"/>
            <TableBlock percent="24" color="green"/>
            <TableBlock percent="38" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Accessibility compliance</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="16" color="hotpink"/>
            <TableBlock percent="13" color="yellow"/>
            <TableBlock percent="23" color="blue"/>
            <TableBlock percent="22" color="green"/>
            <TableBlock percent="25" color="orange"/>
          </ul>
        </div>

        <div className="cmp-row-chart__row-container">
          <p className="cmp-row-chart__label">Rapid prototyping</p>
          <ul className="cmp-row-chart__row">
            <TableBlock percent="13" color="hotpink"/>
            <TableBlock percent="15" color="yellow"/>
            <TableBlock percent="24" color="blue"/>
            <TableBlock percent="31" color="green"/>
            <TableBlock percent="16" color="orange"/>
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
  </div>
)

export default Diagram3a
