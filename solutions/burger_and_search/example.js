// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
  
    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });
  
    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);
  
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
  }
  
  // здесь мы вызываем функцию и передаем в нее классы наших элементов
  setBurger({
    btnClass: "burger", // класс бургера
    menuClass: "menu-wrap", // класс меню
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
  
  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);
  
    search.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });
  
    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;
  
      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });
    
    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });
  }
  
  setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
  