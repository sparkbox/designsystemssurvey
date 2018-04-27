'use strict';

require('core-js/fn/array/from');
require('./intro-parallax');

import addBarCharts from './barChart.js';
import addStackedBarCharts from './stackedBarChart.js';

const getTableElements = chartType => {
  let tableClass = '';
  if (chartType === 'barChart') {
    tableClass = '.cmp-chart';
  } else if (chartType === 'stackedBarChart') {
    tableClass = '.cmp-stacked-chart';
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
