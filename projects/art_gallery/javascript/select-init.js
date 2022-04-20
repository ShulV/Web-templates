const element = document.querySelector('.gallery-container__select');
const choices = new Choices(element, {
  searchEnabled: false,

  itemSelectText: '',

});
document.querySelector('.choices__item--selectable').textContent = "Живопись";
