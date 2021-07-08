export default function sectionObserver(platform, animateClass) {
  if ('IntersectionObserver' in window) {
    const sectionDisplay = document.querySelector('.js-section-display');
    let sectionElement
    let sectionName

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionElement = entry.target
            sectionName = sectionElement.dataset.name
            if (!sectionName) {
              return
            }
            sectionDisplay.innerHTML = sectionName
          }
        })
      },
      {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.05
      }
    )

    document.querySelectorAll('.js-section').forEach((el) => {
      observer.observe(el)
    })
  }
}
