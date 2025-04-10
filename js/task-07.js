// Видаліть ім'я Alex з масиву використовуючи splice

const name = ["Dmytro", "Nata", "Alex", "Serg"];

const indexToDelete = name.indexOf('Alex');

if (indexToDelete === -1) {
    console.log("Такого елементу в масиві немає");
} else {
    name.splice(indexToDelete, 1);
}