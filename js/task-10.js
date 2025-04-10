// Групування об'єктів за ключем:
// Напиши функцію, яка приймає масив об'єктів і ключ, за яким треба групувати ці об'єкти. 
// Функція повинна повернути об'єкт, де ключі — це унікальні значення за вказаним ключем, 
// а значення — це масиви об'єктів, що мають це значення. 
// Якщо об'єкт не має такого ключа, винести в масив rest

function groupBy(arr, key) {
    //* step 1
    const result = {
        rest: [],
    };

    //* step 2
    for (const obj of arr) {
        //* step 2.1
        const groupKey = obj[key];

        //* step 2.2
        if (!groupKey) {
            result.rest.push(obj);
            continue;
        }

        //* step 2.3
        if (!result[groupKey]) {
            //* step 2.5
            result[groupKey] = [];
        }

        //* step 2.4
        result[groupKey].push(obj);
    }

    return result;
}

console.log(
  groupBy(
    [
      { name: "Alex", group: "A" },
      { name: "Maria", group: "B" },
      { name: "Rick", group: "C" },
      { name: "John", group: "A" },
      { name: "Mark", mark: "F" },
      { name: "Natalia", group: "A" },
      { name: "Evgen", group: "C" },
    ],
    "mark"
  )
);

/* {
    A: [{ name: 'Alex', group: 'A' }, { name: 'John', group: 'A' }, { name: "Natalia", group: "A" }], 
    B: [{ name: 'Maria', group: 'B' }], 
    C: [ { name: "Rick", group: "C" }, { name: "Evgen", group: "C" }],
    rest: [ { name: "Mark", mark: "F" }]
}
*/