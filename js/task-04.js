// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

// Функція для зміни розміру
const changeSize = (delta) => {
    const currentWidth = box.offsetWidth;
    const currentHeight = box.offsetHeight;

    const newSizeW = Math.max(20, currentWidth + delta); // Мінімум 20px
    const newSizeH = Math.max(20, currentHeight + delta); // Мінімум 20px

    box.style.width = newSizeW + 'px';
    box.style.height = newSizeH + 'px';
};

increaseBtn.addEventListener('click', () => changeSize(20));
decreaseBtn.addEventListener('click', () => changeSize(-20));