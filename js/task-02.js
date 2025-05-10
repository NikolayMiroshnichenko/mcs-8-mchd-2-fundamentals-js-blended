// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const divContainer = document.querySelector('.number-container');
const fragment = document.createDocumentFragment();

// for (let i = 0; i < 100; i++) {
//     const div = document.createElement('div');
//     div.classList.add('number');
//     const number = randomNumber();
//     number % 2 === 0 ? div.classList.add('even') : div.classList.add('odd');
//     div.textContent = number;
//     fragment.append(div);
// }

Array.from({ length: 100 }, () => {
    const div = document.createElement('div');
    div.classList.add('number');
    const number = randomNumber();
    number % 2 === 0 ? div.classList.add('even') : div.classList.add('odd');
    div.textContent = number;
    fragment.append(div);
})

divContainer.append(fragment);

