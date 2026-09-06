document.documentElement.classList.add("has-js");

const revealItems = document.querySelectorAll(".reveal");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

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
    { threshold: 0.14 }
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
