// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const menuContainer = document.querySelector(`.${params.menuContainerClass}`);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.hiddenClass);
      this.classList.remove(params.activeClass);
    }
  });
  let closeMenuElems = [];
  let menuItemList = document.querySelectorAll('.ht-container__li-a');
  menuItemList.forEach(item => {
    closeMenuElems.push(item);
  });
  let loginBtn = document.querySelector('.ht-container__login');
  closeMenuElems.push(loginBtn);
  closeMenuElems.push(btn);
  closeMenuElems.forEach(item => {
    item.addEventListener("click", function () {
      console.log(document.body.clientWidth);
      if (document.body.clientWidth > 1600) return;
      btn.classList.toggle(params.activeClass);
      if (btn.classList.contains(params.activeClass))
        menuContainer.classList.add(params.containerClass);
      else (menuContainer.classList.remove(params.containerClass));
      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
      }
    });
  });

}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: "burger", // класс бургера
  menuClass: "ht-container__nav", // класс меню
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)

  containerClass: "container", // класс, добавляющийся к блоку в открытом состоянии
  menuContainerClass: "ht-container__nav-container", // класс блока этого блока
});

function setSearch(params) {
  const header = document.querySelector(`.${params.headerTopClass}`);
  const openBtn = header.querySelector(`.${params.openBtnClass}`);
  const search = header.querySelector(`.${params.mainFormBlockClass}`);
  const form = search.querySelector(`.${params.formClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);
  

  search.addEventListener("animationstart", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  let funcListener;
  openBtn.addEventListener("click", function () {
    this.disabled = true;
    header.classList.add(params.activeClass);
    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }   
    let body = document.querySelector('body');
    body.addEventListener('click', funcListener=function(e) {
      if (
        (!form.contains(e.target) && e.target !==openBtn)
        ||
        e.target == closeBtn) {
        body.removeEventListener('click', funcListener);
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
        header.classList.remove(params.activeClass);
      }
    });
  });
  closeBtn.addEventListener('click', funcListener);
  
}

setSearch({
  openBtnClass: "ht-container__search", // класс кнопки открытия
  closeBtnClass: "ht-container__form-exit-btn", // класс кнопки закрытия
  mainFormBlockClass: "ht-container__search-form-wrapper", // класс главного блока, где лежит формы поиска
  formClass: "ht-container__search-form", // класс формы
  headerTopClass: "ht-container", // класс header'a
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});
