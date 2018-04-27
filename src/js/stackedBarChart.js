'use strict';

require('core-js/fn/array/from');

const getStackedBarChartTableData = (chartElement) => {
  console.log('getStackedBarChartTableData');
  const tableRows = Array.from(chartElement.querySelectorAll('tr'));
  const tableData = [];
  console.log(tableRows);
  tableRows.forEach(row => {
    console.log(row);
    if (row.querySelector('td')) {
      console.log(row.querySelector('.table__category').innerHTML);
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

const getLegendLabels = (chartElement) => {
  console.log(getLegendLabels);
  const tableRows = Array.from(chartElement.querySelectorAll('tr'));
  const tableHeaders = Array.from(tableRows[0].querySelectorAll('th'));
  let legendLabels = [];
  for (let i = 0; i < tableHeaders.length; i++) {
    if (i > 0) {
      const dataObject ={
        value: tableHeaders[i].getAttribute('data-value'),
        label: tableHeaders[i].innerHTML
      }
      legendLabels.push(dataObject);
    }
  }
  return legendLabels;
};

const createChartLegend = (chartElement) => {
  console.log(createChartLegend);
  const legendLabels = getLegendLabels(chartElement);
  let legend = `
    <div class="cmp-stacked-chart__entry">
      <ul class="cmp-stacked-chart__legend" aria-hidden="true">
  `;
  legendLabels.forEach(labelObject => {
    legend += `
      <li class="cmp-stacked-chart__key cmp-stacked-chart__key--${labelObject.value}">
        <span class="cmp-chart__legend-label-color"></span>
        <span class="cmp-chart__legend-label-name">${labelObject.label}</span>
      </li>
    `
  });
  return legend += '</ul></div>';
};

const createStackedBarChart = (chartElement) => {
  const tableData = getStackedBarChartTableData(chartElement);
  const legend = createChartLegend(chartElement);
  const chartDiv = '<div class="cmp-chart cmp-chart--stacked-bar">'
  let chart = '';
  tableData.forEach(dataObject => {
    chart += `
    <div class="cmp-stacked-chart__entry">
      <div class="cmp-stacked-chart__category">${dataObject.label}</div>
      <div class="cmp-stacked-chart__group">
        <div class="cmp-stacked-chart__bar cmp-stacked-chart__bar--na" aria-label="Percent who were not applicable: ${dataObject.na}" style="width: ${dataObject.na}%;"></div>
        <div class="cmp-stacked-chart__bar cmp-stacked-chart__bar--1-3" aria-label="Percent who rated one through three: ${dataObject['1-3']}" style="width: ${dataObject['1-3']}%;"></div>
        <div class="cmp-stacked-chart__bar cmp-stacked-chart__bar--4-5" aria-label="Percent who rated four through five: ${dataObject['4-5']}" style="width: ${dataObject['4-5']}%;"></div>
      </div>
    </div>
    `
  });
  return `${chartDiv} ${legend} ${chart} </div>`;
};

const addStackedBarCharts = (stackedBarChartElements) => {
  stackedBarChartElements.forEach(chartElement => {
    const stackedBarChart = createStackedBarChart(chartElement);
    chartElement.innerHTML += stackedBarChart;
    chartElement.getElementsByTagName('table')[0].style.display = 'none';
  });
};

export default addStackedBarCharts;