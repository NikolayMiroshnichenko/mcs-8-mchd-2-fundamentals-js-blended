// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((acc, item) => {
//     return acc += item;
// }, 0);

const result = numbers.reduce((acc, item) => acc += item, 0);


console.log('result', result);