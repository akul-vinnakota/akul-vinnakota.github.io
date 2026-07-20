const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const sections = document.querySelectorAll(".section, .project-card, .experience-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

sections.forEach((section) => {
  section.classList.add("fade-in");
  observer.observe(section);
});
