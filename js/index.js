// task-1

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sorry, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// version-1
// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sorry, it is not an array!';
//     }
//
//     if (numbers.length === 0) {
//         return 'Sorry, this array is empty!';
//     }
//
//     return Math.min(...numbers);
// }

// console.log(findSmallestNumber(numbers));

// version-2
// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sorry, it is not an array!';
//     }
//
//     if (numbers.length === 0) {
//         return 'Sorry, this array is empty!';
//     }
//
//     let min = numbers[0];
//     for (const item of numbers) {
//         if (item < min) {
//             min = item;
//         }
//     }
//
//     return min;
// }
//
// console.log(findSmallestNumber(numbers));


// task-2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
//
// function checkLogin(array) {
//     const userName = prompt('Enter your name:');
//
//     if (userName === null)  {
//         alert('Sorry, operation is cancelled');
//         return;
//     }
//
//     // const message = array.includes(userName) ? `Welcome, ${userName}!` : 'User not found';
//
//     const result = customIncludes(userName, array);
//     const message = result ? `Welcome, ${userName}!` : 'User not found';
//
//     alert(message);
// }
//
// function customIncludes(userName, usersLogins) {
//     for (const item of usersLogins) {
//         if (item === userName) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// checkLogin(logins);

// task-3
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
//
// console.log(styles);
//
// if (styles.includes('blues')) {
//     const index = styles.indexOf('blues');
//     styles[index] = 'classic';
// }
//
// console.log(styles);

// task-4
// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// '<номер елемента> - <значення елемента>'.
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
//
// function logItems(array) {
//     for (let i = 1; i <= array.length; i++) {
//         console.log(`${i} - ${array[i - 1]}`);
//     }
// }
//
// logItems(colors);

// task-5
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 1000,
//     Poly: 2000,
//     Ajax: 3000,
// };
//
// let sum = 0;
//
// // for (const item in salaries) {
// //     console.log(salaries[item]);
// //     sum += salaries[item];
// // }
//
// for (const item of Object.values(salaries)) {
//     sum += item;
// }
//
// console.log('sum:', sum);

// task-6
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.
// const fruits = [
//     { name: 'apple', price: 10, quantity: 2 },
//     { name: 'banana', price: 5, quantity: 5 },
//     { name: 'apple', price: 10, quantity: 3 },
//     { name: 'orange', price: 8, quantity: 4 },
//   ];
//
// function calcTotalPrice(fruits, fruitName) {
//     let total = 0;
//
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             total += fruit.price * fruit.quantity;
//         }
//     }
//
//     return total;
// }
//
// const totalPrice = calcTotalPrice(fruits, 'apple');
// console.log(totalPrice);

// task-7
// Видаліть ім'я Alex з масиву використовуючи splice

// const name = ["Dmytro", "Nata", "Alex", "Serg"];
//
// if (name.indexOf('Alex') !== -1) {
//     name.splice(name.indexOf('Alex'), 1);
// }
//
// console.log(name);

// task-8
// Знайти спільні елементи в масивах:
// Напиши функцію, яка приймає два масиви і повертає масив, що містить спільні елементи обох масивів.

// function findCommonElements(array1, array2) {
//     let result = [];
//
//     for (const item of array1) {
//         if (array2.includes(item)) {
//             result.push(item);
//         }
//     }
//
//     return result;
//
// }
//
// console.log(findCommonElements([1, 2, 3], [2, 5, 3, 4])); // [2, 3]
// console.log(findCommonElements([1, 2, 6, 3], [2, 5, 3, 1, 6, 4])); // [2, 3, 1, 6]

// task-9
// Перетворити об'єкт у масив ключів та значень:
// Напиши функцію, яка приймає об'єкт і повертає масив, де кожен елемент — масив із двох елементів:
// ключ та його значення.

// function objectToArray(customObject) {
//     return Object.entries(customObject);
// }
//
// console.log(objectToArray({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]