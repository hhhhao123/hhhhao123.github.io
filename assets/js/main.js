const revealItems = document.querySelectorAll(".reveal");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const scrollProgress = document.querySelector(".scroll-progress");

const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  scrollProgress.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)));
};

let scrollFrame = null;

const requestScrollProgressUpdate = () => {
  if (scrollFrame !== null) return;
  scrollFrame = window.requestAnimationFrame(() => {
    updateScrollProgress();
    scrollFrame = null;
  });
};

updateScrollProgress();
window.addEventListener("scroll", requestScrollProgressUpdate, { passive: true });
window.addEventListener("resize", requestScrollProgressUpdate);

const showAll = () => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
};

if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
  showAll();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -7%" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const recordToggle = document.querySelector("[data-record-toggle]");

if (recordToggle) {
  const setRecordState = (isSpinning) => {
    recordToggle.classList.toggle("is-paused", !isSpinning);
    recordToggle.setAttribute("aria-pressed", String(isSpinning));
    recordToggle.setAttribute("aria-label", isSpinning ? "暂停唱片旋转" : "继续唱片旋转");
  };

  setRecordState(!reducedMotionQuery.matches);

  recordToggle.addEventListener("click", () => {
    const isSpinning = recordToggle.getAttribute("aria-pressed") === "true";
    setRecordState(!isSpinning);
  });

  reducedMotionQuery.addEventListener("change", (event) => {
    if (event.matches) setRecordState(false);
  });
}
