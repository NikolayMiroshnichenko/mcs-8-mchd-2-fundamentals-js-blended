// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код


// 1. Створюємо масив styles з елементами 'jazz' і 'blues'
const styles = ['jazz', 'blues'];

// 2. Додаємо в кінець 'rock-n-roll'
styles.push('rock-n-roll');

// 3. Знаходимо індекс 'blues' і замінюємо його на 'classic'
const index = styles.indexOf('blues');

if (index !== -1) {
    styles[index] = 'classic';
}

// Перевіримо результат
console.log(styles); // ['jazz', 'classic', 'rock-n-roll']