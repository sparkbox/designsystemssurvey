'use strict';

const getBarChartTableData = table => {
  const tableRows = Array.from(table.querySelectorAll('tr'));
  const tableData = [];
  tableRows.forEach(row => {
    if (row.querySelector('td')) {
      const dataObject = {
        label: row.querySelector('.table__category').innerHTML,
        value: parseFloat(row.querySelector('.table__value').innerHTML)
      };
      tableData.push(dataObject);
    }
  });
  return tableData;
};

const createBarChart = (tableData, chartSize) => {
  let chart = '';
  tableData.forEach(dataObject => {
    const barWidth = dataObject.value / chartSize * 100;
    chart += `
      <div class="entry">
        <div class="entry__category">${dataObject.label}</div>
        <div class="entry__bar" style="width: ${barWidth}">
          <div class="entry__value">${dataObject.value}%</div>
        </div>
      </div>
    `;
  });
  console.log(chart);
  return chart;
};

const addBarChart = barChartElement => {
  const tableData = getBarChartTableData(barChartElement);
  const chartSize = barChartElement.getAttribute('data-size');
  const barChart = createBarChart(tableData, chartSize);
  barChartElement.innerHTML += barChart;
  barChartElement.getElementsByTagName('table')[0].style.display = 'none';
};

export default addBarChart;
