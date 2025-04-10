// Перетворити об'єкт у масив ключів та значень:
// Напиши функцію, яка приймає об'єкт і повертає масив, де кожен елемент — масив із двох елементів: 
// ключ та його значення.

//* v1
// function objectToArray(obj) {
//   return Object.entries(obj);
// }

//* v2
function objectToArray(obj) {
    const entries = [];

    for (const key in obj) {
        const pair = [key, obj[key]];
        entries.push(pair);
    }

    return entries;
}

console.log(objectToArray({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]
