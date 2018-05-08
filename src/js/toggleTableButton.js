'use strict';

require('core-js/fn/array/from');

const toggleTable = () => {
  const buttons = Array.from(document.querySelectorAll('.cmp-button--toggle'));
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const chartTheme = button.id.split('--')[1];
      const chartElement = document.getElementById(`${chartTheme}-chart`);
      const tableElement = document.getElementById(`${chartTheme}-table`);
      if (tableElement.style.display === 'none') {
        tableElement.style.display = 'block';
        chartElement.style.display = 'none';
        button.innerHTML = 'Switch to chart';
      } else {
        tableElement.style.display = 'none';
        chartElement.style.display = 'grid';
        button.innerHTML = 'Switch to table';
      }
    });
  });
};

const createToggleTableButton = (chartTheme) => {
  return `
    <button class="cmp-button cmp-button--toggle" id="toggle-button--${chartTheme}">
      Switch to table
    </button>
  `
};

module.exports = {
  createToggleTableButton,
  toggleTable
};