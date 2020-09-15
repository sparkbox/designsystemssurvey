require('intersection-observer')

export default function observe(platform, animateClass) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            const animationElement = entry.target
            const animationType = animationElement.dataset.animate

            if (!animationType) {
              return
            }

            animationElement.classList.add(animationType)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -200px 0px',
      }
    )

    document.querySelectorAll('.js-watch').forEach((el) => {
      observer.observe(el)
    })
  }
}
