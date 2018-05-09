'use strict';

require('core-js/fn/array/from');

const toggleTable = (e) => {
  const button = e.target;
  const chartTheme = button.id.split('--')[1];
  const tableElement = document.getElementById(`${chartTheme}-table`);
  const tableIsHidden = tableElement.getAttribute('aria-hidden') === 'true';

  if (tableIsHidden) {
    tableElement.setAttribute('aria-hidden', false);
    button.setAttribute('aria-expanded', true);
  } else {
    tableElement.setAttribute('aria-hidden', true);
    button.setAttribute('aria-expanded', false);
  }
};

const initToggleButtons = () => {
  const buttons = Array.from(document.querySelectorAll('.js-chart-toggle'));

  buttons.forEach(button => {
    button.addEventListener('click', toggleTable);
  });
};

const createToggleTableButton = (chartTheme) => {
  return `
    <div class="obj-data-wrapper__toggle">
      <button class="cmp-button js-chart-toggle"
              id="toggle-button--${chartTheme}"
              aria-expanded="false">
        Show as table
        <span class="cmp-button__chevron-icon" role="presentation"><span>
      </button>
    </div>
  `;
};

module.exports = {
  createToggleTableButton,
  initToggleButtons
};
