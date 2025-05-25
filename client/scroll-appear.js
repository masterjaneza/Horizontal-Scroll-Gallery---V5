document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".block");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  blocks.forEach((block) => observer.observe(block));

  const scroller = document.querySelector(".view");
  if (scroller) {
    scroller.addEventListener(
      "wheel",
      function (e) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scroller.scrollLeft += e.deltaY;
        }
      },
      { passive: false }
    );
  }
});