let eventsSlider = new Swiper(".events-container__swiper-container", {
  slidesPerView: 1,
  autoHeight: true,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 40,
  pagination: {
    el: ".events .events-container__pagination",
    type: 'bullets',
  },
  navigation: {
    nextEl: ".events-container__swiper-next-btn",
    prevEl: ".events-container__swiper-prev-btn"
  },

  breakpoints: {
    // when window width is >= 767px
    767: {
      slidesPerView:  2,
      spaceBetween: 34
    },

    1000: {
      slidesPerView:  3,
      spaceBetween: 27
    },

    1900: {
      slidesPerView:  3,
      spaceBetween: 50
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
        link = slide.querySelector('.events-container__slide-detailed-link');
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
          link.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
          link.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        link = slide.querySelector('.events-container__slide-detailed-link');
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
          link.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
          link.tabIndex = '';
        }
      });
    }
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeSlideHeight() {
  let mh = 0;
  
  document.querySelectorAll('.events-container__slide').forEach((slide) => {
    let h_block = parseInt(slide.clientHeight);
    if (h_block > mh) {
      mh = h_block;
    };
  });
  document.querySelectorAll('.events-container__slide').forEach((slide) => {
    slide.style.height = mh + 'px';
  });
}
window.addEventListener('resize', changeSlideHeight());
window.addEventListener('DOMContentLoaded', changeSlideHeight());