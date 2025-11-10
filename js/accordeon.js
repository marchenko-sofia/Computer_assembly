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
