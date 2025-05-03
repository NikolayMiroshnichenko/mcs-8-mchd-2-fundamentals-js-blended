// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

// v1
// const result = numbersArray.toSorted((a, b) => a - b);

// v2
const result = numbersArray.sort((a, b) => a - b);

console.log('result', result)