import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href^="#"]', { // eslint-disable-line no-unused-vars
  speed: 500,
  speedAsDuration: false,
  durationMax: 1000,
  durationMin: 250,
  offset: 0,
  easing: 'easeInOutQuart',
  updateURL: false,
});
