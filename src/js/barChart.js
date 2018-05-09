'use strict';

require('core-js/fn/array/from');

import { createToggleTableButton } from './toggleTableButton';

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

const createBarChart = (tableData, chartTheme) => {
  const toggleTableButton = createToggleTableButton(chartTheme);
  let chart = 
  `<div class="cmp-chart cmp-chart--${chartTheme}" id="${chartTheme}-chart">
    <div class="cmp-chart__range" aria-hidden="true">
      <div class="cmp-chart__low"><div class="cmp-chart__range-value">0%</div></div>
      <div class="cmp-chart__high"><div class="cmp-chart__range-value">100%</div></div>
    </div>`
  ;

  for (let i = 0; i < tableData.length; i++ ) {
    const dataObject = tableData[i];
    const barWidth = `${dataObject.value}%`;
    chart += `
      <div class="cmp-chart__entry cmp-chart__entry--${i + 1}">
        <div class="cmp-chart__category">${dataObject.label}</div>
        <div class="cmp-chart__bar" style="width: ${barWidth}">
          <div class="cmp-chart__value">${dataObject.value}%</div>
        </div>
      </div>
    `
  }
  return `${chart} </div> ${toggleTableButton}`;
};

const addBarCharts = (barChartTable) => {
  barChartTable.forEach(table => {
    const tableParent = table.parentNode;
    const tableData = getBarChartTableData(table);
    const chartTheme = table.getAttribute('data-theme');
    const barChart = createBarChart(tableData, chartTheme);
    tableParent.innerHTML = barChart + tableParent.innerHTML;
    tableParent.getElementsByTagName('table')[0].setAttribute('aria-hidden', true);
  });
};

export default addBarCharts;
