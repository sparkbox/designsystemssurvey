require('core-js/fn/array/from');

import IntersectionObserver from 'intersection-observer-polyfill';

const browserCutsTheMustard = () => {
  return true
  return !!window.IntersectionObserver
};

const init = () => {
  const options = {
    rootMargin: '-20%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('obj-unveiler--is-unveiled');
      }
    });
  }, options);
  const observees = Array.from(document.querySelectorAll('.obj-unveiler'));

  observees.forEach((observee) => {
    observee.classList.add('obj-unveiler--will-unveil')
    observer.observe(observee)
  });
}

if (browserCutsTheMustard()) {
  init();
}
