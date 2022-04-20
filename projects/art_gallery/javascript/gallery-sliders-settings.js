let gallerySlider = new Swiper(".gallery-container__swiper-container", {
  slidesPerView: 1,
  autoHeight: true,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 12,
  pagination: {
    el: ".gallery .gallery-container__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-container__swiper-next-btn",
    prevEl: ".gallery-container__swiper-prev-btn"
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 38
    },
    // when window width is >= 1600px
    1600: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми 
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});