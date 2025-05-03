// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

// v1
// const result = stringArray.toSorted();

// v2
const result = stringArray.sort();
console.log(result);