
/*SliderFunctions Start*/
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateAriaAttributes();
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  }

  function updateAriaAttributes() {
      slides.forEach((slide, index) => {
          slide.setAttribute('aria-hidden', index !== currentIndex);
          const img = slide.querySelector('img');
          img.setAttribute('tabindex', index === currentIndex ? '0' : '-1');
      });
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
          prevSlide();
      } else if (e.key === 'ArrowRight') {
          nextSlide();
      }
  });

  // Initialize aria attributes
  updateAriaAttributes();

  // Optional: Auto-advance slides every 5 seconds
  let intervalId = setInterval(nextSlide, 5000);

  // Pause auto-advance when user interacts with the slider
  slider.addEventListener('mouseover', () => clearInterval(intervalId));
  slider.addEventListener('mouseout', () => intervalId = setInterval(nextSlide, 5000));
});

/*SliderFunctions Endt*/