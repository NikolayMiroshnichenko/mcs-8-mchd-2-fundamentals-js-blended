// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис
// (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const body = document.querySelector('body');
console.log(body);

// const titleEl = document.querySelector('#title');
const titleEl = document.getElementById('title');
console.log(titleEl);

const listEl = document.querySelector('.list');
console.log(listEl);

const dataTopicEl = document.querySelectorAll('[data-topic]');
console.log(dataTopicEl);
// if (dataTopicEl.length > 0) {
//     console.log(dataTopicEl[0]);
// }
dataTopicEl.length > 0 ? console.log(dataTopicEl[0]) : console.log('Немає елементів');

let dataTopicLength = dataTopicEl.length;
dataTopicLength > 0 ? console.log(dataTopicEl[dataTopicLength - 1]) : console.log('Немає елементів');

const h1Sibling = document.querySelector('h1').nextElementSibling;
console.log(h1Sibling)

const allH3 = document.querySelectorAll('h3');
console.log(allH3);

allH3.forEach(el => {
  el.classList.add('active');
})

const navigationsEl = document.querySelectorAll('[data-topic="navigation"]');
console.log(navigationsEl);

const navigationEl = document.querySelector('[data-topic="navigation"]');
console.dir(navigationEl);
navigationEl.style.backgroundColor = 'yellow';

const paragraphEl = document.querySelector('[data-topic="navigation"] p');
paragraphEl.textContent = 'Я змінив тут текст!';
console.log(paragraphEl);

const currentTopic = "manipulation";
const manipulationEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(manipulationEl);

manipulationEl.style.backgroundColor = 'lightblue';

const completedEl = document.querySelector('.completed');
console.log(completedEl);

completedEl.closest('li').remove();

titleEl.insertAdjacentHTML('afterend', "<p>Об'єктна модель документа (Document Object Model)</p>");

const newLi = document.createElement('li');
const newH3 = document.createElement('h3');
newH3.textContent = 'Властивість innerHTML';
const newP = document.createElement('p');
newP.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
newLi.append(newH3, newP);
listEl.append(newLi);

const fifthEl = `
    <li>
        <h3>2. Властивість innerHTML</h3>
        <p>
           Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу 
        </p>
    </li>
`

listEl.insertAdjacentHTML('beforeend', fifthEl);

listEl.innerHTML = '';