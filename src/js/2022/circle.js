/*
  Scrolling Offeset Via https://awik.io/find-far-user-scrolled-javascript/
*/

export default function circleOverlay() {
  const circleEl = document.querySelector('.js-circle');
  let paused = false;
  let scrollTop;
  
  window.addEventListener("scroll", function (e) {
    scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body)
            .scrollTop;
  
    if (!paused) {
      window.requestAnimationFrame(function () {
        let rotate = Math.round(scrollTop / 100);
        circleEl.style.setProperty('--circle-rotate', `rotate(${rotate}deg)`);
        paused = false;
      });
  
      paused = true;
    }
  });
}
