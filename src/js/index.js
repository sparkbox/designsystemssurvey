'use strict';

import addBarCharts from './barChart.js';
import addStackedBarCharts from './stackedBarChart.js';

const getTableElements = chartType => {
  let tableClass = '';
  if (chartType === 'barChart') {
    tableClass = '.cmp-chart--bar';
  } else if (chartType === 'stackedBarChart') {
    tableClass = '.cmp-chart--stacked-bar';
  }
  return Array.from(document.querySelectorAll(tableClass));
};

const addCharts = () => {
  const barChartElements = getTableElements('barChart');
  const stackedBarChartElements = getTableElements('stackedBarChart');
  addBarCharts(barChartElements);
  addStackedBarCharts(stackedBarChartElements);
}

addCharts();
