

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //закрываем окно на кнопке закрыть
    element.onclick = showModals;
});



// modalWindow.addEventListener('click', (e) => {
//     const isModal = e.target.closest('.modal__inner'); /*если клик в любое место кроме .modal__inner то окно закрывается */
//     if (!isModal) {
//         modalWindow.classList.remove('active-modal');
//     }
//     /*добовляем класс*/
// });

// buttonModal.addEventListener('click', () => {
//     modalWindow.classList.add('active-modal'); /*добовляем класс*/
// });

// const modalWindow = document.querySelector('.modals');

function showModals() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

// document.querySelector('.modal-shows').forEach(function (element) {
//     element.onclick = showModals;
// });

let showModal = document.querySelector('.modal-show');
let hideModal = document.querySelector('.modal-close');
// showModal - название функции
function show() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
}

function hide() {
    let modal = document.querySelector('.modal');
    // modal.hidden = true;
    modal.style.display = 'none';

}

showModal.onclick = show;
hideModal.onclick = hide;

document.querySelectorAll('.modal').forEach(function (element) {
    //закрываем окно на клике в области серой
    element.onclick = closeModal;
});

function closeModal() {
    document.querySelectorAll('.modal').forEach(function (element) {
        element.classList.remove('hide');
        // modal.style.display = 'none';
    });
    document.onkeydown = null;
}