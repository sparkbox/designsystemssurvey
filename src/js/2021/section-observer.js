export default function sectionObserver(platform, animateClass) {
  if ('IntersectionObserver' in window) {
    const sectionDisplays = document.querySelectorAll('.js-section-display');

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
            sectionDisplays.forEach((section) => {
              section.innerHTML = sectionName
            })
          }
        })
      },
      {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.02
      }
    )

    document.querySelectorAll('.js-section').forEach((el) => {
      observer.observe(el)
    })
  }
}
