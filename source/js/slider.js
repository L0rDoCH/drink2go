const slides = document.querySelectorAll('.slider__list .slider__item');
let currentSlide = 0;
const sliderToggleNext = document.querySelector('.slider__toggle--forward');
const sliderTogglePrev = document.querySelector('.slider__toggle--back');
const sliderPaginations = document.querySelectorAll('.slider__pagination-item');

sliderToggleNext.addEventListener('click', function () {
  slides[currentSlide].classList.remove('slider__item--active');
  sliderPaginations[currentSlide].classList.remove('slider__pagination-item--active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('slider__item--active');
  sliderPaginations[currentSlide].classList.add('slider__pagination-item--active');
});

sliderTogglePrev.addEventListener('click', function () {
  slides[currentSlide].classList.remove('slider__item--active');
  sliderPaginations[currentSlide].classList.remove('slider__pagination-item--active');
  if (currentSlide === 0) {
    currentSlide = (slides.length - 1);
  } else {
    currentSlide = (currentSlide - 1) % slides.length;
  }
  slides[currentSlide].classList.add('slider__item--active');
  sliderPaginations[currentSlide].classList.add('slider__pagination-item--active');
});

for (let i = 0; i < sliderPaginations.length; i++) {
  sliderPaginations[i].addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--active');
    sliderPaginations[currentSlide].classList.remove('slider__pagination-item--active');
    currentSlide = i
    slides[currentSlide].classList.add('slider__item--active');
    sliderPaginations[currentSlide].classList.add('slider__pagination-item--active');
  });
}
