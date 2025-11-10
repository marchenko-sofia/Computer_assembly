const modalBtns = document.querySelectorAll('.modal__button');
const modalWindow = document.querySelector('.modal');
const body = document.querySelector('body');
const mainBg = document.querySelector('.main-display__background');
const modalInner = document.querySelector('.modal__inner');
const widthStart = document.documentElement.clientWidth;

// Добавление "крестика"

modalInner.insertAdjacentHTML('afterbegin', '<div><img src="img/cross.svg" alt=""></div>');
const modalClose = modalInner.querySelector('div');
modalClose.classList.add('modal__close');


modalBtns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
        // Убираем "скачок"
        const widthEnd = document.documentElement.clientWidth;
        let padd = widthEnd - widthStart;
        body.style.paddingRight = `${padd/10}rem`;
        mainBg.style.paddingRight = `${padd/10}rem`;
    })
});

modalWindow.addEventListener('click', (event) => {
    const isModal = event.target.closest('.modal__inner'); // если нажимаем на модальное окно, тогда это будет переменной isModal
    // если клик не по модалке, то окно закрывается
    if(!isModal){
        modalWindow.style.display = 'none';
        body.style.paddingRight = '';
        mainBg.style.paddingRight = '';
        body.classList.remove('noscroll');
    };
})

// Закрытие окна по нажатию на "крестик"
modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.style.paddingRight = '';
    mainBg.style.paddingRight = '';
    body.classList.remove('noscroll');
});
