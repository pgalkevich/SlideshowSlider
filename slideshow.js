(function () {

  const slides = document.querySelectorAll('.slide-img');
  const sliderPreviews = document.querySelectorAll('.slider-previews__item');
  const sliderText = document.querySelectorAll('.slider-previews__text');
  let current = 0;

  const disableCurrent = (n) => {
    slides[n].className = 'slide-img';
    sliderText[n].className = 'slider-previews__text';
    sliderPreviews[n].className = 'slider-previews__item';
  };

  const changeSlide = (n) => {
    current = (n + slides.length) % slides.length;
    sliderPreviews[current].className = 'slider-previews__item slider-previews__item_active';
    sliderText[current].className = 'slider-previews__text slider-previews__text_active';
    slides[current].className = 'slide-img slide-active';
  };

  const nextSlide = () => {
    disableCurrent(current);
    current++;
    changeSlide(current);
  };

  let slideInterval = setInterval(nextSlide, 4000);

  for (let i = 0; i < sliderPreviews.length; i++) {
    sliderPreviews[i].addEventListener('click', function () {
      clearInterval(slideInterval);
      disableCurrent(current);
      current = parseInt(this.dataset.index);
      changeSlide(current);
      slideInterval = setInterval(nextSlide, 4000);
    });
  };
})();