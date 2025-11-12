const smoothScroll = () => {
    const navbar = document.querySelector('.header__nav');
    const links = navbar.querySelectorAll('a');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // предотвращаем стандартное поведение браузера
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                //кроссбраузерная версия с библиотекой
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        })
    });
}

smoothScroll();