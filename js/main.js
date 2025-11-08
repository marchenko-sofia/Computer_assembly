// Реализация аккордеона
const contents = document.querySelectorAll('.program-line__content');

contents.forEach( (item) => {
    const title = item.querySelector('.program-line__title');
    const descr = item.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        contents.forEach( (otherItem) => {
            if (otherItem !== item) {
                const otherDescr = otherItem.querySelector('.program-line__descr');
                otherDescr.classList.remove('active');
            }
        })
        descr.classList.toggle('active');
    });
});





// const modalWindow = document.querySelector('.modal');
// const buttonModals = document.querySelectorAll('.modal__button');
// const modalClose = document.querySelector('.modal__close');
// const body = document.querySelector('body');

// buttonModals.forEach((item) => {
//     item.addEventListener('click', () => {
//         modalWindow.style.display = 'flex';
//         body.classList.add('noscroll');
//     });
// });

// modalWindow.addEventListener('click', (e) => {
//     const isModal = e.target.closest('.modal__inner'); // если нажимаем на модальное окно, тогда это будет переменной isModal
//     // если клик не по модалке, то окно закрывается
//     if(!isModal) {
//         modalWindow.style.display = 'none';
//         body.classList.remove('noscroll');
//     }
// });

// modalClose.addEventListener('click', () => {
//     modalWindow.style.display = 'none';
//     body.classList.remove('noscroll');
// });
