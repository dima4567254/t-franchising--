
// при клике  на
const buttonModal = document.querySelector('.modal-show');
// у добовляется класс
const modalWindow = document.querySelector('.modal');

/*addEventListenerпрослушиватель событий по нажатию левой кнопкой мышы*/
buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active-modal'); /*добовляем класс*/
      document.onkeydown = function (event) {
          if (event.keyCode == 27) {
            modalWindow.classList.remove('active-modal');
          }
      }
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner'); /*если клик в любое место кроме .modal__inner то окно закрывается */
    if (!isModal) {
        modalWindow.classList.remove('active-modal');
    }
    /*добовляем класс*/
});

// -----------------------------------------------------------------------------
// при клике  на
const buttonModal2 = document.querySelector('.vacancies__box');
// у добовляется класс
const modalWindow2 = document.querySelector('.vacancies__list');

/*addEventListenerпрослушиватель событий по нажатию левой кнопкой мышы*/
buttonModal2.addEventListener('click', () => {
    modalWindow2.classList.slideToggle('active'); /*добовляем класс*/
    // document.onkeydown = function (event) {
    //     if (event.keyCode == 27) {
    //         modalWindow2.classList.remove('active');
    //     }
    // }
});

modalWindow2.addEventListener('click', (e) => {
    const isModal2 = e.target.closest('.vacancies__list'); /*если клик в любое место кроме .modal__inner то окно закрывается */
    if (!isModal2) {
        modalWindow2.classList.remove('active');
    }
    /*добовляем класс*/
});





