const slider = () => {
    const course = document.querySelector('.course');
    const courseEarn = document.querySelector('.course__progress');
    const courseNum = courseEarn.querySelector('.course__number');
    const courseProgress = courseEarn.querySelector('progress');

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    courseNum.textContent = '0₽';
    courseProgress.setAttribute('value', 0);

    const startNum = 0;
    const finishNum = randomInteger(350000, 600000);
    const duration = 3000; // Длительность анимации в миллисекундах
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        let progress = (timestamp - startTime) / duration;
        let currentValue = Math.floor(startNum + (finishNum - startNum) * progress);

        if (progress < 1) {
            courseNum.textContent = `${currentValue}₽`;
            courseProgress.setAttribute('value', currentValue);
            requestAnimationFrame(animate); // Продолжаем анимацию
        } else {
            courseNum.textContent = `${finishNum}₽`; // Устанавливаем конечное значение
            courseProgress.setAttribute('value', finishNum);
        }
    };

    window.addEventListener('scroll', (event) => {
        const heightWindow = document.documentElement.clientHeight;
        const topCourse = course.getBoundingClientRect().top;
        if (topCourse > (heightWindow / 3) && topCourse < (2 * heightWindow / 3)) {
            requestAnimationFrame(animate);
        }
    });

};

slider();
