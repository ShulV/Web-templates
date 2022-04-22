let parisCoords = [48.85882333950175, 2.3470419999999894];
let somePointCoords = [48.87219126643673, 2.354199860118847];
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map1", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: parisCoords,
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7
  });
  myPlacemark = new ymaps.Placemark(somePointCoords, {
    hintContent: 'Навели курсор на красивую метку :)',
    balloonContent: 'Кликнули по красивой метке :)'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'images/Subtract.svg',
    // Размеры метки.
    iconImageSize: [28, 40],
  });



  myMap.geoObjects
    .add(myPlacemark);
}
