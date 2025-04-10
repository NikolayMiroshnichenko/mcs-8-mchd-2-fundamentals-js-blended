// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

function calcTotalPrice(fruits, fruitName) {
    let total = 0;

    for (const fruit of fruits) {
        if (fruit.name === fruitName) {
            total += fruit.price * fruit.quantity;
        }
    }

    return total;
}