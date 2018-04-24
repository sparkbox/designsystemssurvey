'use strict';

require('core-js/fn/array/from');

const getStackedBarChartTableData = (table) => {
  const tableRows = Array.from(table.querySelectorAll('tr'));
  const tableData = [];
  tableRows.forEach(row => {
    if (row.querySelector('td')) {
      const dataObject = {
        label: row.querySelector('.table__category').innerHTML,
        na: parseFloat(row.querySelector('.table__value--na').innerHTML),
        '1-3': parseFloat(row.querySelector('.table__value--1-3').innerHTML),
        '4-5': parseFloat(row.querySelector('.table__value--4-5').innerHTML)
      };
      tableData.push(dataObject);
    }
  });
  return tableData;
};

const createStackedBarChart = (tableData) => {
  let chart = '';
  tableData.forEach(dataObject => {
    chart += `
    <div class="cmp-chart__entry">
      <div class="cmp-chart__category">${dataObject.label}</div>
      <div>
        <span class="cmp-chart__value cmp-chart__value--na" width=${dataObject.na}%></span>
        <span class="cmp-chart__value cmp-chart__value--1-3" width=${dataObject['1-3']}%></span>
        <span class="cmp-chart__value cmp-chart__value--4-5" width=${dataObject['4-5']}%></span>
    </div>
    `
  });
  return chart;
};

const addStackedBarCharts = (stackedBarChartElements) => {
  stackedBarChartElements.forEach(chartElement => {
    const tableData = getStackedBarChartTableData(chartElement);
    const stackedBarChart = createStackedBarChart(tableData);
    chartElement.innerHTML += stackedBarChart;
    chartElement.getElementsByTagName('table')[0].style.display = 'none';
  });
};

export default addStackedBarCharts;