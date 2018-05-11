'use strict';

import addBarChart from './barChart.js';

const getTableElements = chartType => {
  let tableClass = '';
  if (chartType === 'barChart') {
    tableClass = '.chart--type-bar';
  } else if (chartType === 'stackedBarChart') {
    tableClass = '.chart--type-stacked-bar';
  }
  return Array.from(document.querySelectorAll(tableClass));
};

const forEachNode = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

const addCharts = () => {
  const barChartElements = getTableElements('barChart');
  const stackedBarChartElements = getTableElements('stackedBarChart');
  forEachNode(barChartElements, function(index, value) {
    addBarChart(value);
  });
};

addCharts();
