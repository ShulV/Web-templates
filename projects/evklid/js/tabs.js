// ----------------------  TABS  ------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.how__step-btn').forEach((tabBtn) => {
    tabBtn.addEventListener('click', (e) => {
      //смена цвета текста кнопки
      document.querySelectorAll('.how__step-btn').forEach((tabBtn) => {
        tabBtn.classList.remove('how__step-btn-active')
      });
      //смена блока
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.how__tab-content').forEach((tabBlock) => {
        tabBlock.classList.remove('how__tab-content-active');
      });
      console.log(document.querySelector(`[data-target="${path}"]`))
      document.querySelector(`[data-target="${path}"]`).classList.add('how__tab-content-active');
      e.currentTarget.classList.add('how__step-btn-active');
    })

  })
})
