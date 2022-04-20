let projectsSlider = new Swiper(".projects-container__swiper-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 21,
  navigation: {
    nextEl: ".projects-container__swiper-next-btn",
    prevEl: ".projects-container__swiper-prev-btn",
    
  },
  height: 150,
  breakpoints: {
    // when window width is >= 600px
    600: {
      height: 65,
      spaceBetween: 21,
    },

    767: {
      slidesPerView:  2,
      spaceBetween: 34,
      
    },

    1000: {
      slidesPerView:  2,
      spaceBetween: 50,
      height: 106,
    },

    1600: {
      slidesPerView:  3,
      spaceBetween: 50,
      height: 128,
    },
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
