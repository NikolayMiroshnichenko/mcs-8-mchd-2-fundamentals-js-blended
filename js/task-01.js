// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// v1
function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Sory, it is not an array!';
    }

    if (numbers.length === 0) {
        return 'Array is empty!';
    }

    let value = numbers[0];

    for (const number of numbers) {
        if (number < value) {
            value = number;
        };
    };

    return value;
}

// v2
// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';
//     }

//     if (numbers.length === 0) {
//         return 'Array is empty!';
//     }

//     return Math.min(...numbers);
// }


const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers));

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];