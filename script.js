const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const animatedElements = document.querySelectorAll(
  ".section, .project-card, .experience-card, .knowledge-card, .framework-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

animatedElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
});
