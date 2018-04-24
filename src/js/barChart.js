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
    const barWidth = `${dataObject.value / chartSize * 100}%`;
    chart += `
      <div class="cmp-chart__entry">
        <div class="cmp-chart__category">${dataObject.label}</div>
        <div class="cmp-chart__bar" style="width: ${barWidth}">
          <div class="cmp-chart__value">${dataObject.value}%</div>
        </div>
      </div>
    `;
  });
  return chart;
};

const addBarCharts = (barChartElements) => {
  barChartElements.forEach(chartElement => {
    const tableData = getBarChartTableData(chartElement);
    const chartSize = chartElement.getAttribute('data-size');
    const barChart = createBarChart(tableData, chartSize);
    chartElement.innerHTML += barChart;
    chartElement.getElementsByTagName('table')[0].style.display = 'none';
  });
};

export default addBarCharts;
