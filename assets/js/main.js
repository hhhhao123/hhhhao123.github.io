const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const hero = document.querySelector(".hero");

if (hero && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3);
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3);

    hero.style.setProperty("--pointer-x", x);
    hero.style.setProperty("--pointer-y", y);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--pointer-x", "0");
    hero.style.setProperty("--pointer-y", "0");
  });
}

if (!prefersReducedMotion) {
  document.querySelectorAll(".waveform i, .hero-grid span, .motion-rail span").forEach((item, index) => {
    item.style.animationDelay = `${index * 0.11}s`;
  });
}
