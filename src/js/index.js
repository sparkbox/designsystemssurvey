'use strict';

require('core-js/fn/array/from');
require('./intro-parallax');
require('./unveiler');

import addBarCharts from './barChart.js';
import addStackedBarCharts from './stackedBarChart.js';
import smoothScroll from './smoothScroll';
import { initToggleButtons } from './toggleTableButton';

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
  const barChartTable = getTableElements('barChart');
  const stackedBarChartTable = getTableElements('stackedBarChart');
  addBarCharts(barChartTable);
  addStackedBarCharts(stackedBarChartTable);
}

addCharts();
initToggleButtons();

const jumpLinks = document.querySelectorAll('.js-smooth-jump-link');
Array.from(jumpLinks).forEach((el) => {
  el.addEventListener('click', (e) => {
    const pageFragmentToScrollTo = e.target.getAttribute('href');
    const elementToScrollTo = document.querySelector(pageFragmentToScrollTo);
    const absoluteDistanceToScroll = Math.abs(elementToScrollTo.offsetTop - window.pageYOffset);

    smoothScroll(
      elementToScrollTo,
      700,
      'easeOutQuint',
    );

  });
});
