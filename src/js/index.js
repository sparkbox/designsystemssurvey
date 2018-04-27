'use strict';

require('core-js/fn/array/from');
require('./intro-parallax');

import addBarCharts from './barChart.js';
import addStackedBarCharts from './stackedBarChart.js';

const getTableElements = (chartType)=> {
  let tableType = '';
  if (chartType === 'barChart') {
    tableType = '[data-simple]';
  } else if (chartType === 'stackedBarChart') {
    tableType = '[data-column]';
  }
  return Array.from(document.querySelectorAll(tableType));
}

const addCharts = () => {
  const barChartElements = getTableElements('barChart');
  const stackedBarChartElements = getTableElements('stackedBarChart');
  addBarCharts(barChartElements);
  addStackedBarCharts(stackedBarChartElements);
}

addCharts();
