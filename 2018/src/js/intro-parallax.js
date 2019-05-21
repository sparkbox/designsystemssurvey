const Rellax = require('rellax');

const enableRellaxMq = "(min-width: 45em)";
const enableRellaxMqList = window.matchMedia(enableRellaxMq);

// Rellax is only enabled for large viewports, because it looks
// funky on small ones. This function checks to see if the passed
// MqList matches, then triggers Rellax if it is.
const enableRellaxIfAppropriate = (e) => {
  window.rellaxInstances = window.rellaxInstances || {};
  
  if (e.matches) {
   window.rellaxInstances.intro = new Rellax('.rellax');
  } else if (window.rellaxInstances.intro) {
    window.rellaxInstances.intro.destroy();
  }
};

enableRellaxIfAppropriate(enableRellaxMqList);
enableRellaxMqList.addListener(enableRellaxIfAppropriate);
