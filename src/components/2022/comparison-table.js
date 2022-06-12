import React from "react"

const ComparisonTable = () => {
  return (
    <table className="util-visually-hidden">
      <caption>What are the top priorities and top challenges for the design system at this moment?</caption>
      <thead>
        <tr>
          <th>Responses</th>
          <th>Top Priorities</th>
          <th>Top Challenges</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Expanding the design system</th>
          <td>41%</td>
          <td>34%</td>
        </tr>
        <tr>
          <th>Adoption</th>
          <td>34%</td>
          <td>36%</td>
        </tr>
        <tr>
          <th>Parity between design & code</th>
          <td>33%</td>
          <td>37%</td>
        </tr>
        <tr>
          <th>Overcoming technical creative debt</th>
          <td>31%</td>
          <td>43%</td>
        </tr>
        <tr>
          <th>Internal education</th>
          <td>21%</td>
          <td>32%</td>
        </tr>
        <tr>
          <th>Governance</th>
          <td>16%</td>
          <td>33%</td>
        </tr>
        <tr>
          <th>Staffing</th>
          <td>13%</td>
          <td>35%</td>
        </tr>
        <tr>
          <th>Contribution</th>
          <td>12%</td>
          <td>23%</td>
        </tr>
        <tr>
          <th>Leadership buy-in</th>
          <td>12%</td>
          <td>16%</td>
        </tr>
        <tr>
          <th>Transparency about changes</th>
          <td>8%</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ComparisonTable