const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  placeholder: false,
  placeholderValue: 'Материал',
  itemSelectText: '',

});
document.querySelector('.choices__item--selectable').textContent = "Материал";
