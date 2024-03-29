export default function animationObserver(platform, animateClass) {
  if ('IntersectionObserver' in window) {
    document.querySelectorAll('[data-animation]').forEach((el) => {
      el.classList.add('animation-ready')
    })

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationElement = entry.target
            const animationClass = animationElement.dataset.animation

            if (!animationClass) {
              return
            }

            animationElement.classList.add(animationClass)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0% 0% -15% 0%',
        threshold: 0
      }
    )

    document.querySelectorAll('[data-animation]').forEach((el) => {
      observer.observe(el)
    })
  }
}
