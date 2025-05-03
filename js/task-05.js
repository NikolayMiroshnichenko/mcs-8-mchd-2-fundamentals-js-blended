// Знайдіть перше непарне число

const numbers = [2, 4, 6, 8, 10, 10, 12, 1];

const result = numbers.find(item => item % 2 !== 0);

console.log('result', result);