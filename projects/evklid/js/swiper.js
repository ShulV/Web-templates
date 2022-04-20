// ----------------------  Slider  --------------------------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  longSwipesMs: 1000,

});

const slider = document.querySelector('.swiper');
// запуск автоматического слайда каждые 5 секунд
setInterval(() => swiper.slideNext(), 5000);
