export default function observe(platform, animateClass) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            if (document.body.dataset.theme === "dark") {
              document.body.dataset.theme = "light";
              console.log("set light");
            } else {
              document.body.dataset.theme = "dark";
              console.log("set dark");
            }

            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -200px 0px',
      }
    )

    document.querySelectorAll('.obj-section').forEach((el) => {
      observer.observe(el)
    })
  }
}
