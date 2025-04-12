// Групування об'єктів за ключем:
// Напиши функцію, яка приймає масив об'єктів і ключ, за яким треба групувати ці об'єкти. 
// Функція повинна повернути об'єкт, де ключі — це унікальні значення за вказаним ключем, 
// а значення — це масиви об'єктів, що мають це значення. 
// Якщо об'єкт не має такого ключа, винести в масив rest

// console.log(
//   groupBy(
//     [
//       { name: "Alex", group: "A" },
//       { name: "Maria", group: "B" },
//       { name: "Rick", group: "C" },
//       { name: "John", group: "A" },
//       { name: "Mark", mark: "F" },
//       { name: "Natalia", group: "A" },
//       { name: "Evgen", group: "C" },
//     ],
//     "mark"
//   )
// );

/* {
    A: [{ name: 'Alex', group: 'A' }, { name: 'John', group: 'A' }, { name: "Natalia", group: "A" }], 
    B: [{ name: 'Maria', group: 'B' }], 
    C: [ { name: "Rick", group: "C" }, { name: "Evgen", group: "C" }],
    rest: [ { name: "Mark", mark: "F" }]
}
*/