export default function sectionObserver(platform, animateClass) {
  if ('IntersectionObserver' in window) {
    const sectionIndicators = document.querySelectorAll('[data-indicator]');

    let currentSection
    let sectionIndicator

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = entry.target.dataset.observer
            
            if ( currentSection === "top") {
              sectionIndicators.forEach((section) => {
                section.classList.remove("cmp-fixed-sides__dot--active")
              })
            } else {
              sectionIndicator = document.querySelector(`[data-indicator="${currentSection}"]`)
                
                sectionIndicators.forEach((section) => {
                  section.classList.remove("cmp-fixed-sides__dot--active")
                })
              
                sectionIndicator.classList.add("cmp-fixed-sides__dot--active")
              }
            }
        })
      },
      {
        rootMargin: '0 0 0 0',
        threshold: 0.02
      }
    )

    document.querySelectorAll('[data-observer]').forEach((el) => {
      observer.observe(el)
    })
  }
}
