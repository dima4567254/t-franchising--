
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

$('.vacancies__box').on('click', function () {
    $('.vacancies__list').slideToggle();
});

const buttonModals = document.querySelector('.vacancies__box');
// у добовляется класс
const modalWindows = document.querySelector('.vacancies__list');

modalWindows.addEventListener('click', (e) => {
    const isModals = e.target.closest('.div'); /*если клик в любое место кроме .modal__inner то окно закрывается */
    if (!isModals) {
        modalWindows.classList.remove('active-modal');
    }
    /*добовляем класс*/
});

buttonModals.addEventListener('click', () => {
    modalWindows.classList.add('active-modal'); /*добовляем класс*/
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            modalWindows.classList.remove('active-modal');
        }
    }
});


