const carousel = document.querySelector(".carousel-container");
const carouselControls = Array.from(
  carousel.querySelectorAll(".carousel-control"),
);
const previousButton = carousel.querySelector(".carousel-arrow-previous");
const nextButton = carousel.querySelector(".carousel-arrow-next");

let autoplayTimer;

function scheduleNextSlide() {
  window.clearTimeout(autoplayTimer);

  if (document.hidden) {
    return;
  }

  autoplayTimer = window.setTimeout(() => {
    showSlide(1);
  }, 5000);
}

function showSlide(direction) {
  const currentIndex = carouselControls.findIndex((control) => control.checked);
  const nextIndex =
    (currentIndex + direction + carouselControls.length) %
    carouselControls.length;

  carouselControls[nextIndex].checked = true;
  scheduleNextSlide();
}

previousButton.addEventListener("click", () => showSlide(-1));
nextButton.addEventListener("click", () => showSlide(1));
carouselControls.forEach((control) => {
  control.addEventListener("change", scheduleNextSlide);
});
document.addEventListener("visibilitychange", scheduleNextSlide);

scheduleNextSlide();
