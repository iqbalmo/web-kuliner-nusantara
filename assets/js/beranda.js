window.addEventListener("load", () => {
  alert(
    "Selamat datang di Kuliner Nusantara! Nikmati eksplorasi kuliner Anda."
  );
  fadeInContent();
});

function fadeInContent() {
  const content = document.querySelector(".fade-in");
  setTimeout(() => {
    content.classList.add("visible");
  }, 300);
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100; 
  slider.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
  updateSlider();
});

let autoSlide = setInterval(() => {
  nextButton.click();
}, 5000);

slider.addEventListener("mouseover", () => clearInterval(autoSlide));
slider.addEventListener("mouseout", () => {
  autoSlide = setInterval(() => nextButton.click(), 5000);
});
