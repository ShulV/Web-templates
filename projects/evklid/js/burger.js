// Burger
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__burger').addEventListener('click', (e) => {
    document.querySelector('.header__nav').classList.toggle('header__nav-active')
  })
});
