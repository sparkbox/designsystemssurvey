'use strict';

require('core-js/fn/array/from');

const getBarChartTableData = (table) => {
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

const createBarChart = (tableData, chartSize, chartTheme) => {
  let chart = 
  `<div class="cmp-chart cmp-chart--${chartTheme}">
    <div class="cmp-chart__range" aria-hidden="true">
      <div class="cmp-chart__low">0%</div>
      <div class="cmp-chart__high">${chartSize}%</div>
    </div>`
  ;

  for (let i = 0; i < tableData.length; i++ ) {
    const dataObject = tableData[i];
    const barWidth = `${dataObject.value / chartSize * 100}%`;
    chart += `
      <div class="cmp-chart__entry cmp-chart__entry--${i + 1}">
        <div class="cmp-chart__category">${dataObject.label}</div>
        <div class="cmp-chart__bar" style="width: ${barWidth}">
          <div class="cmp-chart__value">${dataObject.value}%</div>
        </div>
      </div>
    `
  }
  chart += `</div>`;
  return chart;
};

const addBarCharts = (barChartElements) => {
  barChartElements.forEach(chartElement => {
    const tableParent = chartElement.parentNode;
    const tableData = getBarChartTableData(chartElement);
    const chartSize = chartElement.getAttribute('data-size');
    const chartTheme = chartElement.getAttribute('data-theme');
    const barChart = createBarChart(tableData, chartSize, chartTheme);
    tableParent.innerHTML += barChart;
    tableParent.getElementsByTagName('table')[0].style.display = 'none';
  });
};

export default addBarCharts;
