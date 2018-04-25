'use strict';

require('core-js/fn/array/from');

const getStackedBarChartTableData = (chartElement) => {
  const tableRows = Array.from(chartElement.querySelectorAll('tr'));
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

const getLegendLabels = (chartElement) => {
  const tableRows = Array.from(chartElement.querySelectorAll('tr'));
  const tableHeaders = Array.from(tableRows[0].querySelectorAll('th'));
  let legendLabels = [];
  for (let i = 0; i < tableHeaders.length; i++) {
    if (i > 0) {
      legendLabels.push(tableHeaders[i].innerHTML);
    }
  }
  return legendLabels;
};

const createChartLegend = (chartElement) => {
  const legendLabels = getLegendLabels(chartElement);
  let legend = '<div class="cmp-chart__legend">';
  legendLabels.forEach(label => {
    legend += `
      <div class="cmp-chart__legend-label">
        <span class="cmp-chart__legend-label-color"></span>
        <span class="cmp-chart__legend-label-name">${label}</span>
      </div>
    `
  });
  return legend += '</div>';
};

const createStackedBarChart = (chartElement) => {
  const tableData = getStackedBarChartTableData(chartElement);
  const legend = createChartLegend(chartElement);
  let chart = '<div class="cmp-chart cmp-chart--stacked-bar">';
  tableData.forEach(dataObject => {
    chart += `
    <div class="cmp-chart__entry">
      <div class="cmp-chart__category">${dataObject.label}</div>
      <div>
        <span class="cmp-chart__value cmp-chart__value--na" width=${dataObject.na}%></span>
        <span class="cmp-chart__value cmp-chart__value--1-3" width=${dataObject['1-3']}%></span>
        <span class="cmp-chart__value cmp-chart__value--4-5" width=${dataObject['4-5']}%></span>
      </div>
    </div>
    `
  });
  return chart += `</div> ${legend}`;
};

const addStackedBarCharts = (stackedBarChartElements) => {
  stackedBarChartElements.forEach(chartElement => {
    const stackedBarChart = createStackedBarChart(chartElement);
    console.log(stackedBarChart);
    chartElement.innerHTML += stackedBarChart;
    chartElement.getElementsByTagName('table')[0].style.display = 'none';
  });
};

export default addStackedBarCharts;