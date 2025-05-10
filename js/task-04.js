// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

const changeSize = (size) => {

    const currentWidth = box.offsetWidth;
    const currentHeight = box.offsetHeight;

    const newSizeW = Math.max(20, currentWidth + size);
    const newSizeH = Math.max(20, currentHeight + size);

    box.style.width = `${newSizeW}px`;
    box.style.height = `${newSizeH}px`;

    // if (size < 0) {
    //     box.offsetWidth > 50 ? box.style.width = `${box.offsetWidth + size}px` : null;
    //     box.offsetHeight > 50 ? box.style.height = `${box.offsetHeight + size}px` : null;
    //     return;
    // }

    // box.offsetWidth >= 50 ? box.style.width = `${box.offsetWidth + size}px` : null;
    // box.offsetHeight >= 50 ? box.style.height = `${box.offsetHeight + size}px` : null;
};

decreaseBtn.addEventListener('click', () => changeSize(-10))
increaseBtn.addEventListener('click', () => changeSize(10))




