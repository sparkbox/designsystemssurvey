export default function observe(platform, animateClass) {

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          platform.current.parentElement.classList.add(animateClass);
        }
      });
    });
    observer.observe(platform.current);
  }
}
