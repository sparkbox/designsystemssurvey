// When you scroll to ".cmp-diagram-chart"
// Threshold .75 (so that it's 3/4 way through the div)
// Then add a class ".animate" that will apply the animation
  // Still need to move this animation into a class in SASS


export default function observe(platform, animateClass) {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        platform.current.parentElement.classList.add(animateClass);
      }
    });
  });

  observer.observe(platform.current);
}
