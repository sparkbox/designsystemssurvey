'use strict';

require('core-js/fn/array/from');

import { createToggleTableButton } from './toggleTableButton';

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

const getLegendLabels = (table) => {
  const tableRows = Array.from(table.querySelectorAll('tr'));
  const tableHeaders = Array.from(tableRows[0].querySelectorAll('th'));
  let legendLabels = [];
  for (let i = 0; i < tableHeaders.length; i++) {
    if (i > 0) {
      const dataObject ={
        value: tableHeaders[i].getAttribute('data-value'),
        label: tableHeaders[i].innerHTML,
        sublabel: tableHeaders[i].getAttribute('data-sublabel'),
      }
      legendLabels.push(dataObject);
    }
  }
  return legendLabels;
};

const createChartLegend = (table) => {
  const legendLabels = getLegendLabels(table);
  let legend = `
    <div class="cmp-stacked-chart__entry">
      <ul class="cmp-stacked-chart__legend" aria-hidden="true">
  `;
  legendLabels.forEach(labelObject => {
    legend += `
      <li class="cmp-stacked-chart__key cmp-stacked-chart__key--${labelObject.value}">
        <span class="cmp-stacked-chart__legend__label">
          ${labelObject.label}
        </span>`

    if (labelObject.sublabel) {
      legend += `
        <span class="cmp-stacked-chart__legend__sublabel">
          ${labelObject.sublabel}
        </span>`
    }

    legend += `
      </li>
    `

    if (labelObject.sublabel) {
    }

  });
  return legend += '</ul></div>';
};

const createStackedBarChart = (table, chartTheme) => {
  const tableData = getStackedBarChartTableData(table);
  const legend = createChartLegend(table);
  const toggleTableButton = createToggleTableButton(chartTheme);
  const chartDiv = `<div class="cmp-stacked-chart cmp-stacked-chart--${chartTheme}" id="${chartTheme}-chart">
    <div class="cmp-stacked-chart__range" aria-hidden="true">
      <div class="cmp-stacked-chart__low"><div class="cmp-chart__range-value">0%</div></div>
      <div class="cmp-stacked-chart__high"><div class="cmp-chart__range-value">100%</div></div>
    </div>`
  let chart = '';
  for (let i = 0; i < tableData.length; i++ ) {
    const dataObject = tableData[i];
    chart += `
    <div class="cmp-stacked-chart__entry cmp-stacked-chart__entry--${i + 1}">
      <div class="cmp-stacked-chart__category">${dataObject.label}</div>
      <div class="cmp-stacked-chart__group">
        <div class="cmp-stacked-chart__bar cmp-stacked-chart__bar--4-5" aria-label="Percent who rated four through five: ${dataObject['4-5']}" style="width: ${dataObject['4-5']}%;"></div>
        <div class="cmp-stacked-chart__bar cmp-stacked-chart__bar--1-3" aria-label="Percent who rated one through three: ${dataObject['1-3']}" style="width: ${dataObject['1-3']}%;"></div>
        <div class="cmp-stacked-chart__bar cmp-stacked-chart__bar--na" aria-label="Percent who were not applicable: ${dataObject.na}" style="width: ${dataObject.na}%;"></div>
      </div>
    </div>
    `
  }
  return `${chartDiv} ${legend} ${chart}</div> ${toggleTableButton}`;
};

const addStackedBarCharts = (stackedBarChartTable) => {
  stackedBarChartTable.forEach(table => {
    const tableParent = table.parentNode;
    const chartTheme = table.getAttribute('data-theme');
    const stackedBarChart = createStackedBarChart(table, chartTheme);
    tableParent.innerHTML = stackedBarChart + tableParent.innerHTML;
    tableParent.getElementsByTagName('table')[0].setAttribute('aria-hidden', true);
  });
};

export default addStackedBarCharts;
