const pair_indexes = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 2],
  [2, 3],
  [3, 3],
  [3, 4]
];

function find_array_in_array_list(arr, arr_list) {
  /* найти массив в списке массивов */
  for (let i = 0; i < arr_list.length; i++) {
    if (arr_list[i][0] === arr[0] && arr_list[i][1] === arr[1]) return i;
  }
  return -1;
}

function find_next_slide_pair(cur_index_pair, direction) {
  /* найти следующую пару номеров для слайдов из pair_indexes */
  let cur_pair_index = find_array_in_array_list(cur_index_pair, pair_indexes); //текущий индекс из pair_indexes
  if (cur_pair_index === 7 && direction > 0) return pair_indexes[7];
  if (cur_pair_index === 0 && direction < 0) return pair_indexes[0];
  let new_index_pair = pair_indexes[cur_pair_index];
  if (direction > 0) {
    new_index_pair = pair_indexes[cur_pair_index + 1];
  } else {
    new_index_pair = pair_indexes[cur_pair_index - 1];
  }
  return new_index_pair;
}

let slider_list = []; // список слайдеров (2)

function handleWheel(e) {

  let cur_index_pair = [slider_list[0].index, slider_list[1].index]; //текущее состояние слайдеров (их индексы)
  let = new_index_pair = find_next_slide_pair(cur_index_pair, e.deltaY);
  if (new_index_pair == pair_indexes[0]) {
    document.getElementById("scroll-anim").style.display = "block";
  }
  else {
    document.getElementById("scroll-anim").style.display = "none";
  }
  if (new_index_pair[0] > cur_index_pair[0]) {
    slider_list[0].go('+', wait = true);
  } else if (new_index_pair[0] < cur_index_pair[0]) {
    slider_list[0].go('-', wait = true);
  } else if (new_index_pair[1] > cur_index_pair[1]) {
    slider_list[1].go('+', wait = true);
  } else if (new_index_pair[1] < cur_index_pair[1]) {
    slider_list[1].go('-', wait = true);
  }
  //
  document.querySelector('.main-desktop').removeEventListener("wheel", handleWheel);

  setTimeout(() => {
    document.querySelector('.main-desktop').addEventListener("wheel", handleWheel);
  }, 500); // return event after 1 second
}

function btnSpliderFlip(btn, direction) {
  if (direction < 1) {
    btn.go('-', wait = true);
  } else {
    btn.go("+", wait = true);
  }
  let splide_labels = document.querySelectorAll('.down-block__label');
  splide_labels.forEach((item, i, arr) => {
    item.classList.remove('down-block__label_active');
  })
  splide_labels[btn.index].classList.add('down-block__label_active');
}

function tabSpliderFlip(slider, index) {

  slider.go(index, wait = true);

  let splide_tabs = document.querySelectorAll('.left-sect-2__tab');
  splide_tabs[index].classList.add('left-sect-2__tab_active');
  splide_tabs.forEach((tab, index, tabs) => {
    tab.classList.remove('left-sect-2__tab_active');
  })
  splide_tabs[index].classList.add('left-sect-2__tab_active');
}

document.addEventListener('DOMContentLoaded', function () {

  // создание объекта левого слайдера
  slider_list[0] = new Splide('#splide-left', {
    direction: 'ttb',
    height: '100vh',
    fixedHeight: '100vh',
    pagination: false,
    arrows: false,
    drag: false,
  }).mount();
  // создание объекта правого слайдера
  slider_list[1] = new Splide('#splide-right', {
    direction: 'ttb',
    height: '100vh',
    fixedHeight: '100vh',
    pagination: false,
    arrows: false,
    drag: false,
  }).mount();

  // обработка события для блока со слайдерами
  let sliders_block = document.querySelector('.main-desktop');
  sliders_block.addEventListener('wheel', handleWheel);


  // кнопочный слайдер в правом блоке-4

  let btn_slider = new Splide('#btn-splide', {
    pagination: false,
    arrows: false,
    drag: false,
  }).mount();

  let splide_btn_left = document.getElementById('splider-btn-left');
  splide_btn_left.addEventListener('click', () => btnSpliderFlip(btn_slider, -1));
  let splide_btn_right = document.getElementById('splider-btn-right');
  splide_btn_right.addEventListener('click', () => btnSpliderFlip(btn_slider, 1));

  // tab-слайдер в левом блоке-2

  let tab_slider = new Splide('#tab-splide', {
    pagination: false,
    arrows: false,
    // drag: false,
  }).mount();
  let slider_pause = false;
  let slider_tabs = document.querySelectorAll('.left-sect-2__tab');
  slider_tabs.forEach((btn, index, btns) => {
    btn.addEventListener('click', () => {
      console.log('click')
      if (!slider_pause){
        tabSpliderFlip(tab_slider, index);
        slider_pause = true;
        setTimeout(() => {
          slider_pause = false;
        }, 500);
      }

    });
  });
});
