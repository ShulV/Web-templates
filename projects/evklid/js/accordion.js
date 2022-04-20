// ----------------------  Accordion  ------------------------------------
$(function () {
  $("#accordion").accordion({
    heightStyle: "auto",
    active: true,
    collapsible: true
  });

});

// поворот кнопок
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq__btn-area').forEach((areaH3) => {
    btnArea = areaH3.querySelector('.faq__question');
    areaH3.addEventListener('click', (e) => {
      //смена цвета текста кнопки
      document.querySelectorAll('.faq__question-btn').forEach((tabBtn) => {
        tabBtn.classList.remove('faq__question-btn-active');
      });
      _btnAreas = document.querySelectorAll('.faq__question').forEach((_btnArea) => {
        _btnArea.setAttribute("aria-expanded", "false");
      });
      if (areaH3.classList.contains('ui-accordion-header-active')){
        e.currentTarget.querySelector('.faq__question').setAttribute("aria-expanded", "true");
        e.currentTarget.querySelector('.faq__question-btn').classList.add('faq__question-btn-active');
      }

      else
        e.currentTarget.querySelector('.faq__question-btn').classList.remove('faq__question-btn-active');

        document.querySelectorAll('.faq__question').forEach((_btnArea) => {
          console.log(_btnArea)
        });
    })



  })
})
