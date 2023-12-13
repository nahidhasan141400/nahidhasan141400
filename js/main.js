const cureor = document.querySelector(".cursor");
const cureorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cureor.style.left = `${x}px`;
  cureor.style.top = `${y}px`;
  cureorDot.style.left = `${x}px`;
  cureorDot.style.top = `${y}px`;
});

const clink = document.querySelectorAll(".clink");

clink.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    cureor.classList.add("canim");
  });
  e.addEventListener("mouseleave", () => {
    cureor.classList.remove("canim");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-load");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach((image) => {
    observer.observe(image);
  });
});
